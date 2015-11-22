var Project = require('./Project');

var Work = function(root) {
	
	var projects = [];
	
	Array.prototype.forEach.call(root.querySelectorAll('.work__project'), function(el) {
		projects.push(new Project(el));
	});
	
	function updateProjects(mql) {
		projects.forEach(function(project) {
			if(mql.matches) {
				project.deactivate();
			}
			else {
				project.activate();
			}
		});
	}
	
	var mql = matchMedia('(max-width: 971px)');
	mql.addListener(function(mql) {
		console.log('update query', mql.matches);
		updateProjects(mql);
	});
	updateProjects(mql);
	
	
}

module.exports = Work;