var Project = require('./Project');

var Work = function(root) {
	
	this.projects = [];
	
	Array.prototype.forEach.call(root.querySelectorAll('.work__project'), function(el) {
		this.projects.push(new Project(el));
	}.bind(this));
}

module.exports = Work;