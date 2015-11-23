var $ = require('jquery');
var TweenMax = require('gsap');

var NavigationEach = function  ( dom ) {
    
    var element = dom;
    var topChild = element.querySelector('.each-navigation__inner');
    var menuLine = element.querySelector('.each-navigation__line');

    element.addEventListener('mouseenter', animateIn);
    element.addEventListener('mouseleave', animateOut);
    element.addEventListener('click', scrollToElement);

    function animateIn () {
        TweenLite.to(topChild, 0.19, {top:"-100%", ease:Quad.easeOut});
        TweenLite.to(menuLine, 0.19, {left:"0", ease:Quad.easeOut});

    }

    function animateOut () {
        TweenLite.to(topChild, 0.19, {top:"0", ease:Quad.easeOut});
        TweenLite.to(menuLine, 0.19, {left:"-100%", ease:Quad.easeOut});
    }


    function scrollToElement () {
        var target = $('.work');
        var top = target.offset().top;
            $('html').animate({scrollTop: top}, 800);
            return false;
    }
}

module.exports = NavigationEach;