var $ = require('jquery');

var Particles = require('./Particles');


var VideoExperience = ( function( window, undefined ) {

	var particlesContainer = document.querySelector('#background');

	var particles = new Particles( particlesContainer );


} )( window );

/*VideoExperience.init();*/