var $ = require('jquery');
var SVG = require('./vendors/svg');
var $stellar = require('./vendors/stellar');


var Particles = function  ( dom ) {
    
    var densityLayer = [40, 25, 20],
        scaleMax = [0.6, 0.8, 1.5],
        scaleMin = [0.2, 0.6, 0.9],
        maxSize = 20,
        minSize = 10,
        fullHeight = $('#container').height(),
        fullWidth =  $('#container').width(),
        num = 0,
        randomScale, 
        randomTime,
        allElements = new Array(),

        element = dom,
        elementWrapper = element.querySelector('.background-wrapper'),

/*      SVG Variables*/

        shapesContainer,

/*      SVG Styles*/

        shapeColor = '#e9e9e9';



    $('.background-wrapper').height(fullHeight);
    createParallaxElement();
    $.stellar();


    function createParallaxElement () {
        
        for (var i = 0; i < elementWrapper.children.length; i++) {
            createShape(elementWrapper.children[i], scaleMax[i], scaleMin[i], densityLayer[i]);
            allElements.push($('svg')[i].children);

            
        };
        
        animateShape();

       
    } 

    function createShape (container, MaxScale, MinScale, density) {

        shapesContainer = SVG(container).size('100%', fullHeight);

       for (var i = 0; i < density; i++) {

            randomNumb = Math.floor(Math.random() * 4) + 0;
                   
            switch(randomNumb) {

                case 0:
                    shape = shapesContainer.circle(35, 35).addClass('circle').attr({ stroke:  shapeColor, 'fill-opacity': 0, 'stroke-width': 1.5})
                break;

                case 1:
                    shape = shapesContainer.rect(35, 35).attr({stroke:shapeColor, 'fill-opacity': 0, 'stroke-width': 1.5})
                break;

                case 2:
                    shape = shapesContainer.rect(10, 10).attr({stroke:shapeColor, 'stroke-width': 2, fill:shapeColor })
                   /* shape = shapesContainer.path('M54.99,80.448h44.449V36L54.99,80.448z').attr({ stroke:shapeColor, 'fill-opacity': 0, 'stroke-width': 2})*/
                break;

                case 3:
                    shape = shapesContainer.path('M 36.322,94.577 36.073,93.587 51.49,89.7 55.455,73.986 71.168,70.021 75.135,54.307 90.847,50.342 94.813,34.627 110.823,30.586 111.073,31.575 95.652,35.466 91.686,51.181 75.972,55.146 72.008,70.859 56.294,74.825 52.33,90.538 Z').attr({ fill: shapeColor })
                break;
                }                   
            
            randomScale = Math.random() * MaxScale + MinScale;
            randomTime = Math.floor(Math.random() * 1000) + 500;

            shape.opacity(randomScale);
            shape.scale(randomScale);
            shape.translate(Math.floor(Math.random() * fullWidth) + 0, Math.floor(Math.random() * fullHeight + 300) + -300);
            
        };
    }

    function animateShape () {

        for (var i = 1; i < allElements.length; i++) {
            var randomX = Math.floor(Math.random() < 0.5 ? -1 : 1);
            var randomY = Math.floor(Math.random() * 1000) - 500;
            var randomTime = Math.floor(Math.random() * 200) + 100;
            var randomRotation = Math.floor(Math.random() * 360) -360;
            TweenMax.to(allElements[i], randomTime, {x: '-=500', rotation:randomRotation, transformOrigin:'50% 50%', ease:Quad.easeOut, repeat:-1, yoyo:true});
        };
    }

}

module.exports = Particles;

