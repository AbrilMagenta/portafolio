var gulp = require( "gulp" );
var gutil = require( "gulp-util" );
var plumber = require( "gulp-plumber" );
var stylus = require( "gulp-stylus" );
var nib = require( "nib" );
var source = require("vinyl-source-stream");
var watchify = require("watchify");
var browserify = require("browserify");
var browserSync = require( "browser-sync" ).create();
var postcss = require( "gulp-postcss" );
var autoprefixer = require( "autoprefixer" )
var cssnano = require( "cssnano" );
var uglify = require( "uglify-js" );
var through2 = require( "through2" );

function uglifyStream() {
	var buffer = '';
	
	return through2(
		function(data, enc, next) {
			buffer += data;
			next();
		},
		function(end) {
			this.push(uglify.minify(buffer, {
				fromString: true,
				output: {
					comments: /license/i
				},
				compress: {
					drop_console: true
				}
			}).code);
			end();
		}
	);
}

gulp.task("default", ["browserify", "watch", "style", "browser-sync"])

gulp.task( "watch", function() {
  gulp.watch( "./src/styles/**/*.styl", [ "style" ] );

});

gulp.task("style", function() {
	gulp.src( "./src/styles/*.styl" )
		.pipe( plumber() )
		.pipe( stylus( {
				use: [ nib() ],
				url: { name: "url64", paths: [ "./src/styles/" ] }				
			}))
			.on( "error", gutil.log )
			.on( "error", gutil.beep )
		.pipe(postcss([autoprefixer({browsers: ['last 2 versions']})]))
		.pipe( gulp.dest( "./out/styles" ) )
		.pipe( browserSync.stream() );

});

gulp.task("browserify", function() {
	var browserifyArgs = watchify.args;
	browserifyArgs.debug = true;

	var b = watchify(browserify("./src/js/main.js", browserifyArgs));

	function rebundle() {
		return b.bundle()
			.on("error", function(error) {
				console.error("\033[31m " + error.stack + "\033[0m\n");
				this.emit("end");
			})
			.pipe(source("main.js"))
			.pipe(gulp.dest("./out/js"))
			.pipe(browserSync.stream());
	}

	b.on("update", rebundle);

	b.on("log", function(msg) {
		console.log(msg);
	});

	return rebundle();
});

gulp.task("browser-sync", function() {
	browserSync.init({
		server: {
            baseDir: ["./out", "./static"]
        }
	});
});

gulp.task('js-prod', function() {
	return browserify('./src/js/main.js', {debug: false})
		.bundle()
		.pipe(uglifyStream())
		.pipe(source('main.js'))
		.pipe(gulp.dest('./prod/js/'))
});

gulp.task('style-prod', function() {
	return gulp.src( "./src/styles/*.styl" )
		.pipe( plumber() )
		.pipe( stylus( {
				use: [ nib() ],
				url: { name: "url64", paths: [ "./src/styles/" ] }				
			}))
			.on( "error", gutil.log )
			.on( "error", gutil.beep )
		.pipe(postcss([
			autoprefixer({browsers: ['last 2 versions']}),
			cssnano()
		]))
		.pipe( gulp.dest( "./prod/styles" ) )
});

gulp.task('prod', ['js-prod', 'style-prod']);