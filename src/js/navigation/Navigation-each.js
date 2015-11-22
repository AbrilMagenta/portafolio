var TweenMax = require('gsap');

var NavigationEach = function  ( dom ) {
    
    var element = dom;
    var topChild = element.querySelector('.each-navigation__inner');
    var menuLine = element.querySelector('.each-navigation__line');

    element.addEventListener('mouseenter', animateIn);
    element.addEventListener('mouseleave', animateOut);

    function animateIn () {
        TweenLite.to(topChild, 0.19, {top:"-100%", ease:Quad.easeOut});
        TweenLite.to(menuLine, 0.19, {left:"0", ease:Quad.easeOut});

    }

    function animateOut () {
        TweenLite.to(topChild, 0.19, {top:"0", ease:Quad.easeOut});
        TweenLite.to(menuLine, 0.19, {left:"-100%", ease:Quad.easeOut});
    }

}

module.exports = NavigationEach;