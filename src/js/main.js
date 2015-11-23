
var $ = require('jquery');
var TweenMax = require('gsap');

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

	var sBrowser, sUsrAg = navigator.userAgent;

	 
	if(sUsrAg.indexOf("Chrome") > -1) {
	    var particles = new Particles( particlesContainer );
	}
	
	$('body').css('overflow-y', 'auto');
	TweenLite.to($('.loader-element'), 0.5, {opacity:0, onComplete:function  () {
	  $('.loader-element').css('display', 'none');

	}});

 	$( window ).resize(function() {
		document.querySelector('.intro').style.height = window.innerHeight + 'px';
  	});


  	$('.nav-work').click( function  () {
        var top = $('.work').offset().top;
            $('html, body').animate({scrollTop: top - 50}, 500);
            return false;
  		
  	})

  	$('.nav-about').click( function  () {
        var top = $('.about').offset().top;
            $('html, body').animate({scrollTop: top - 50}, 500);
            return false;
  		
  	})

  	 $('.contact__back-to-top').click( function  () {
        var top = $('.intro').offset().top;
            $('html, body').animate({scrollTop: top}, 800);
            return false;
  		
  	})
});

document.querySelector('.intro').style.height = window.innerHeight + 'px';
