
var $ = require('jquery');


/*CORE*/
var Work = require('./work');
var Particles = require('./Particles');
var Navigation = require('./navigation/Navigation');


/*ELEMENTS*/
var container = document.querySelector('#container');
var particlesContainer = document.querySelector('#background');


/*INIT CORE*/
var work = new Work( document.querySelector('.work') );
var navigation = new Navigation(container)


/*CUSTOM FUNCTIONS*/


$(function() {

  var particles = new Particles( particlesContainer );

});

document.querySelector('.intro').style.height = window.innerHeight + 'px';
