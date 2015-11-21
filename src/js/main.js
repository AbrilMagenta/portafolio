
var $ = require('jquery');


/*CORE*/
var Work = require('./work');
var Particles = require('./Particles');


/*ELEMENTS*/
var particlesContainer = document.querySelector('#background');


/*INIT CORE*/
var work = new Work( document.querySelector('.work') );

var particles = new Particles( particlesContainer );


/*CUSTOM FUNCTIONS*/

document.querySelector('.intro').style.height = window.innerHeight + 'px';
