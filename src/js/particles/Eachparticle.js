var $ = require('jquery');


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var EachParticle = function  ( dom, totalParticle, size ) {
    
    var canvas = dom;
    var ctx = canvas.getContext('2d');


    $( window ).resize(function() {
        W = window.innerWidth + 100;
        H = window.innerHeight + 150;
        canvas.width = W;
        canvas.height = H;
    });

    var W = window.innerWidth + 100;
    var H = window.innerHeight + 150;

    var shapeSize = size; 

    canvas.width = W;
    canvas.height = H;

    var particleCount = totalParticle;
    var particles = new Array();
    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    for (var i = 0; i < particleCount; i++) {
        particles.push( new Particle() );
    };

    animloop();

    function paintCanvas() {

        ctx.clearRect(0, 0, W, H);
    }  

    function Particle() {
        this.plusOrMinus = Math.random() < 0.5 ? -1 : 1;
        this.rotationVelocity = Math.random() * 0.03 - 0.01;
        this.randomShape = Math.floor(Math.random() * 4) + 0;
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.vx = -0.5 + Math.random() * (Math.random() * 2);
        this.vy = -0.5 + Math.random() * (Math.random() * 2);
        this.rotation = Math.random() * 1 - 0.5;
  
        this.radius = Math.random() * (Math.random() * shapeSize) + 20;

        this.draw = function() {
          
            ctx.beginPath();

            switch(this.randomShape) {

                case 0:
                    ctx.save();
                    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = '#e3e3e3';
                    ctx.stroke();
                    ctx.restore();
                break;

                case 1:
                    ctx.save();
                    ctx.translate(this.x + this.radius / 2, this.y + this.radius / 2);
                    ctx.rotate(this.rotation);
                    ctx.rect(-this.radius / 2, -this.radius / 2, this.radius, this.radius);
                    ctx.restore();
                    ctx.lineWidth = 2;
                    ctx.strokeStyle = '#e3e3e3';
                    ctx.stroke();
                break;

                case 2:

                    ctx.save();
                    ctx.fillStyle = '#e3e3e3';
                    ctx.translate(this.x + this.radius / 2, this.y + this.radius / 2);
                    ctx.rotate(this.rotation);
                    ctx.rect(-this.radius / 2, -this.radius / 2, this.radius, this.radius);
                    ctx.fill();
                    ctx.restore();

                break;

                case 3:
                    ctx.save();
                    ctx.fillStyle = '#e3e3e3';
                    ctx.translate(this.x + (this.radius * 2.5) / 2, this.y + 1 / 2);
                    ctx.rotate(this.rotation);
                    ctx.rect(-(this.radius * 2.5) / 2, -2 / 2, (this.radius * 2.5), 1);
                    ctx.fill();
                    ctx.restore();
                break;

                } 
        }
    }

    function draw() {
        paintCanvas();
  
        for (var i = 0; i < particles.length; i++) {
            p = particles[i];
            p.draw();
        }
  
        update();
    }


    function update() {

        for (var i = 0; i < particles.length; i++) {
            p = particles[i];
        
            p.x += p.vx / 3;
            p.y += p.vy / 3;

            p.rotation += 0.00005 + p.rotationVelocity * plusOrMinus;

        
            if(p.x > (W + 50) )
              p.x = 0;
            
            else if(p.x < - 100) {
              p.x = W;
            }
            
            if(p.y + p.radius > (H + p.radius))
              p.y = 0 - p.radius;
            
            else if(p.y < -200) {
              p.y = H;
            }
        }
    }

    function animloop() {

        requestAnimFrame(animloop);
        draw();
        
    }
}

module.exports = EachParticle;



