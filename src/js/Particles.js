var $ = require('jquery');
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


/*    createParallaxElement();*/
/*    $.stellar();*/

    function random ( min, max ) {
        
        return Math.random() * (max - min) + min;

    } 

    function createParallaxElement () {
        
/*        for (var i = 0; i < elementWrapper.children.length; i++) {
            createShape(elementWrapper.children[i], scaleMax[i], scaleMin[i], densityLayer[i]);
            allElements.push($('svg')[i].children);

            
        };*/
        


       
    } 

    function createShape (container, MaxScale, MinScale, density) {



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





function Particles(){
  this.colors = [
    '255, 255, 255',
    '255, 99, 71',
    '19, 19, 19'
  ]
  this.blurry = true;

  this.border = false;

  this.minRadius = 10; 
  this.maxRadius = 35;

  this.minOpacity = .005;
  this.maxOpacity = .5;

  this.minSpeed = .05;
  this.maxSpeed = .5;
  this.fps = 60;
  this.numParticles = 75;
  this.canvas = document.getElementById('canvas');
  this.ctx = this.canvas.getContext('2d');
}

Particles.prototype.init = function(){
  this.render();
  this.createCircle();
}

Particles.prototype._rand = function(min, max){
  return Math.random() * (max - min) + min;
}

Particles.prototype.render = function(){ 
  var self = this,
      wHeight = $(window).height(),
      wWidth = $(window).width();
  
  self.canvas.width = wWidth;
  self.canvas.height = wHeight;
  
  $(window).on('resize', self.render);
}

Particles.prototype.createCircle = function(){
  var particle = [];

  for (var i = 0; i < this.numParticles; i++) {
    var self = this,
        color = self.colors[~~(self._rand(0, self.colors.length))];
    
    particle[i] = {
      radius    : self._rand(self.minRadius, self.maxRadius),
      xPos      : self._rand(0, canvas.width),
      yPos      : self._rand(0, canvas.height),
      xVelocity : self._rand(self.minSpeed, self.maxSpeed),
      yVelocity : self._rand(self.minSpeed, self.maxSpeed),
      color     : 'rgba(' + color + ',' + self._rand(self.minOpacity, self.maxOpacity) + ')'
    }
    
    //once values are determined, draw particle on canvas
    self.draw(particle, i);
  }
  //...and once drawn, animate the particle
  self.animate(particle);
}


Particles.prototype.draw = function(particle, i){
  var self = this,
      ctx = self.ctx;
  
  if (self.blurry === true ) {
    //creates gradient if blurry === true
    var grd = ctx.createRadialGradient(particle[i].xPos, particle[i].yPos, particle[i].radius, particle[i].xPos, particle[i].yPos, particle[i].radius/1.25);
    
    grd.addColorStop(1.000, particle[i].color);
    grd.addColorStop(0.000, 'rgba(34, 34, 34, 0)');
    ctx.fillStyle = grd;
  } else {
    //otherwise sets to solid color w/ opacity value
    ctx.fillStyle = particle[i].color; 
  }
  
  if (self.border === true) {
    ctx.strokeStyle = '#fff';
    ctx.stroke();
  }
  
  ctx.beginPath();
  ctx.arc(particle[i].xPos, particle[i].yPos, particle[i].radius, 0, 2 * Math.PI, false);
  ctx.fill();
}

Particles.prototype.animate = function(particle){
  var self = this,
          ctx = self.ctx;
  
  setInterval(function(){
    //clears canvas
    self.clearCanvas();
    //then redraws particles in new positions based on velocity
    for (var i = 0; i < self.numParticles; i++) {
      particle[i].xPos += particle[i].xVelocity;
      particle[i].yPos -= particle[i].yVelocity;
     
      //if particle goes off screen call reset method to place it offscreen to the left/bottom
      if (particle[i].xPos > self.canvas.width + particle[i].radius || particle[i].yPos > self.canvas.height + particle[i].radius) {
        self.resetParticle(particle, i);
      } else {
        self.draw(particle, i);
      }
    }  
  }, 1000/self.fps); 
}

Particles.prototype.resetParticle = function(particle, i){
  var self = this;
  
  var random = self._rand(0, 1);
  
  if (random > .5) { 
    // 50% chance particle comes from left side of window...
    particle[i].xPos = -particle[i].radius;
    particle[i].yPos = self._rand(0, canvas.height);
  } else {
    //... or bottom of window
    particle[i].xPos = self._rand(0, canvas.width);
    particle[i].yPos = canvas.height + particle[i].radius;   
  }
  //redraw particle with new values
  self.draw(particle, i);
}

Particles.prototype.clearCanvas = function(){
  this.ctx.clearRect(0, 0, canvas.width, canvas.height);
}

/*var particle = new Particles().init();*/

