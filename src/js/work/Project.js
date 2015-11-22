var Project = function(el) {
		
	var hitField = find('.work__hit-field');
	var agency = find('.work__agency');
	var projectName = find('.work__project-name');
	var meta = find('.work__meta');
	
	hitField.addEventListener('mouseenter', onMouseEnter);
	hitField.addEventListener('mouseleave', onMouseLeave);
	
	function find(query) {
		return el.querySelector(query);
	}
	
	function onMouseEnter() {
		el.classList.add('work__project_focus');
		hitField.classList.add('work__hit-field_focus');
		agency.classList.add('work__agency_focus');
		projectName.classList.add('work__project-name_focus');
		meta.classList.add('work__meta_focus');
	}
	
	function onMouseLeave() {
		el.classList.remove('work__project_focus');
		hitField.classList.remove('work__hit-field_focus');
		agency.classList.remove('work__agency_focus');
		projectName.classList.remove('work__project-name_focus');
		meta.classList.remove('work__meta_focus');
	}
	
}

module.exports = Project;