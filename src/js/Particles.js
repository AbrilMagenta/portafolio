var $ = require('jquery');


var SVG = require("./vendors/svg");

var Particles = function  ( dom ) {
    
    var density = 40,
        speed = 0.2,
        maxSize = 15,
        minSize = 10,
        fullHeight = window.innerHeight,
        fullWidth = window.innerWidth,
        num = 0,
        randomScale, 
        randomTime,

        element = dom,

/*      SVG Variables*/

        shapesContainer,

/*      SVG Styles*/

        shapeColor = '#e9e9e9';


        
    createWrapper();

    for (var i = 0; i < density; i++) {
        
        createShape();
    
    };


    function createWrapper () {

        shapesContainer = SVG(element).size('100%', fullHeight);

    }

    function createShape () {

        shapeR =  Math.floor(Math.random() * maxSize) + minSize,
        shapeW = Math.floor(Math.random() * maxSize) + minSize,
        randomNumb = Math.floor(Math.random() * 4) + 0;
               
        switch(randomNumb) {

            case 0:
                shape = shapesContainer.circle(shapeR, shapeR).addClass('circle').move(100, 300).attr({ stroke:  shapeColor, 'fill-opacity': 0, 'stroke-width': 2})
            break;

            case 1:
                shape = shapesContainer.rect(shapeW, shapeW).attr({stroke: shapeColor, fill: shapeColor, 'stroke-width': 2}).move(100, 500)
            break;

            case 2:
                shape = shapesContainer.path('M 0.428,125.405 -0.061,123.465 30.212,115.83 37.997,84.975 68.851,77.19 76.638,46.334 107.492,38.549 115.28,7.691 146.717,-0.243 147.207,1.697 116.927,9.338 109.139,40.196 78.284,47.981 70.499,78.836 39.645,86.622 31.86,117.476 Z').attr({ fill: shapeColor })
            break;

            case 3:
                shape = shapesContainer.path('M 36.521,94.728 106.934,94.728 106.934,24.313 Z').attr({ stroke:shapeColor, 'fill-opacity': 0, 'stroke-width': 2})
            break;
            }                   
        
        randomScale = Math.random() * 0.6 + 0.3;
        randomTime = Math.floor(Math.random() * 7000) + 5000;

        shape.scale(randomScale);
        shape.translate(Math.floor(Math.random() * fullWidth) + 0, Math.floor(Math.random() * fullHeight) + -100);
        shape.animate(randomTime, '>').rotate(Math.floor(Math.random() * 360) + -360).loop(0, true);
        
    }

}

module.exports = Particles;

