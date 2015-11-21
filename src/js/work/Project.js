var Project = function(el) {
		
	var hitField = el.querySelector('.work__hit-field');
	
	hitField.addEventListener('mouseenter', onMouseEnter);
	hitField.addEventListener('mouseleave', onMouseLeave);
	
	function onMouseEnter() {
		el.classList.add('work__project_focus');
	}
	
	function onMouseLeave() {
		el.classList.remove('work__project_focus');
	}
	
}

module.exports = Project;