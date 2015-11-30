var $ = require('jquery');
var $stellar = require('../vendors/stellar');
var EachParticle = require('./Eachparticle');


var Particles = function  ( dom ) {
    
    var densityLayer = [8, 8],
        scale = [30, 60],

        element = dom,
        elementWrapper = element.querySelector('.background-wrapper');


    createParallaxElement();

    $.stellar();

    function createParallaxElement () {
          
        var eachParticleWrapper = null;

        for (var i = 0; i < elementWrapper.children.length; i++) {

          eachParticleWrapper = new EachParticle(elementWrapper.children[i], densityLayer[i], scale[i]);

        };

    } 
}

module.exports = Particles;



