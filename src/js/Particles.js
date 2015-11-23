var $ = require('jquery');
var SVG = require('./vendors/svg');
var $stellar = require('./vendors/stellar');


var Particles = function  ( dom ) {
    
    var densityLayer = [90, 25, 30],
        scaleMax = [0.5, 1, 2],
        scaleMin = [0.2, 0.6, 1.5],
        maxSize = 20,
        minSize = 10,
        fullHeight = $('html').height(),
        fullWidth =  2000,
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



    $( window ).resize(function() {
        $('.background-wrapper').height(fullHeight);
    });
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
                   
                break;

                case 3:
                     shape = shapesContainer.path('M54.99,80.448h44.449V36L54.99,80.448z').attr({ stroke:shapeColor, 'fill-opacity': 0, 'stroke-width': 1.5})
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

        var randomX;
        var randomY;
        var randomTime;
        var plusOrMinus;
        var randomRotation;

        for (var i = 1; i < allElements.length; i++) {

            randomX = (Math.random() * 1 + 0)  < 0.5 ? "+=" + (Math.random() * fullWidth - 200) : "-=" + (Math.random() * fullWidth - 200);
            randomY = (Math.random() * 1 + 0)  < 0.5 ? "+=" + (Math.random() * fullHeight - 200) : "-=" + (Math.random() * fullHeight - 200);
            randomTime = Math.floor(Math.random() * 250) + 200;
            plusOrMinus = (Math.random() * 1 + 0)  < 0.5 ? "+=360" : "-=360";
            randomRotation = Math.floor(Math.random() * 360) - 360;

            TweenMax.set(allElements[i], {rotation: randomRotation});
            TweenMax.to(allElements[i], randomTime, {x: randomX, y: randomY, ease:Quad.easeOut, repeat:-1, yoyo:true, delay: Math.random() * 3 + 0});
            TweenMax.to(allElements[i], Math.floor(Math.random() * 130) + 90, {rotation:plusOrMinus, transformOrigin:'50% 50%', ease:Quad.easeOut, repeat:-1, delay:Math.random() * 1 + 0, yoyo:true});
        };
    }

}

module.exports = Particles;

