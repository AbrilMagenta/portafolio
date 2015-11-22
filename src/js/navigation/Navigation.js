var NavigationEach = require('./Navigation-each');

var Navigation = function  ( dom ) {
    
    var wrapper = dom.querySelector('.navigation');
    var navElements = wrapper.querySelectorAll('.each-navigation');

    initElements();

    function initElements () {

    	for (var i = 0; i < navElements.length; i++) {
    		
    		navigationEach = new NavigationEach(navElements[i]);
    	};
	}
}

module.exports = Navigation;

