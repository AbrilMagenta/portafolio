var $ = require('jquery');
var Work = require('./work');

var Particles = require('./Particles');

var work = new Work(document.querySelector('.work'));


var VideoExperience = ( function( window, undefined ) {

	var particlesContainer = document.querySelector('#background');

	var particles = new Particles( particlesContainer );


} )( window );

/*VideoExperience.init();*/
