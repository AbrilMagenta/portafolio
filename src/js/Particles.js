var $ = require('jquery');
var SVG = require("./vendors/svg");

var Particles = function  ( dom ) {
    
    var densityLayer = 60,
        maxSize = 15,
        minSize = 10,
        fullHeight = $("#container").height(),
        fullWidth =  $("#container").width(),
        num = 0,
        randomScale, 
        randomTime,

        element = dom,

/*      SVG Variables*/

        shapesContainer,

/*      SVG Styles*/

        shapeColor = '#e9e9e9';

    createParallaxElement();


    function createParallaxElement () {

        createWrapper();
        
        for (var i = 0; i < densityLayer; i++) {
        
        createShape(1, 0.3);
    
        };

        animateShape();
    } 

    function createWrapper () {

        shapesContainer = SVG(element).size('100%', fullHeight);

    }

    function createShape (MaxScale, MinScale) {

        shapeR =  Math.floor(Math.random() * maxSize) + minSize,
        shapeW = Math.floor(Math.random() * maxSize) + minSize,
        randomNumb = Math.floor(Math.random() * 4) + 0;
               
        switch(randomNumb) {

            case 0:
                shape = shapesContainer.circle(shapeR, shapeR).addClass('circle').move(100, 300).attr({ stroke:  shapeColor, 'fill-opacity': 0, 'stroke-width': 2})
            break;

            case 1:
                shape = shapesContainer.rect(shapeW, shapeW).attr({stroke:shapeColor, 'fill-opacity': 0, 'stroke-width': 2}).move(100, 500)
            break;

            case 2:
                shape = shapesContainer.path('M54.99,80.448h44.449V36L54.99,80.448z').attr({ stroke:shapeColor, 'fill-opacity': 0, 'stroke-width': 2})
                
            break;

            case 3:
                shape = shapesContainer.path('M 36.322,94.577 36.073,93.587 51.49,89.7 55.455,73.986 71.168,70.021 75.135,54.307 90.847,50.342 94.813,34.627 110.823,30.586 111.073,31.575 95.652,35.466 91.686,51.181 75.972,55.146 72.008,70.859 56.294,74.825 52.33,90.538 Z').attr({ fill: shapeColor })
            break;
            }                   
        
        randomScale = Math.random() * MaxScale + MinScale;
        randomTime = Math.floor(Math.random() * 8000) + 3000;

        shape.opacity(randomScale);
        shape.scale(randomScale);
        shape.translate(Math.floor(Math.random() * fullWidth) + -200, Math.floor(Math.random() * fullHeight) + -300);
    }

    function animateShape () {

        var allElements = element.querySelector('svg').children;

        for (var i = 1; i < allElements.length; i++) {
            var randomX = Math.floor(Math.random() * 150) + -100;
            var randomY = Math.floor(Math.random() * 150) + -100;
            var randomTime = Math.floor(Math.random() * 25) + 10;
            var randomRotation = Math.floor(Math.random() * 630) + -360;
            TweenMax.to(allElements[i], randomTime, {x: "+=" + randomX, y: "+=" + randomY, rotation:randomRotation, transformOrigin:"50% 50%", ease:Quad.easeOut, repeat:-1, yoyo:true});
        };
    }

}

module.exports = Particles;

