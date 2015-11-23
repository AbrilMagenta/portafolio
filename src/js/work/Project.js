var Project = function(el) {
	
	var active = false;
		
	var hitField = find('.work__hit-field');
	var agency = find('.work__agency');
	var projectName = find('.work__project-name');
	var meta = find('.work__meta');
	
	function find(query) {
		return el.querySelector(query);
	}
	
	function activate() {
		if(active) {
			return;
		}
		
		active = true;
		
		hitField.addEventListener('mouseenter', onMouseEnter);
		hitField.addEventListener('mouseleave', onMouseLeave);
	}
	
	function deactivate() {
		if(!active) {
			return;
		}
		
		active = false;
		
		hitField.removeEventListener('mouseenter', onMouseEnter);
		hitField.removeEventListener('mouseleave', onMouseLeave);
		
		removeClasses();
	}
	
	function addClasses() {
		el.classList.add('work__project_focus');
		hitField.classList.add('work__hit-field_focus');
		agency.classList.add('work__agency_focus');
		projectName.classList.add('work__project-name_focus');
		meta.classList.add('work__meta_focus');
	}
	
	function removeClasses() {
		el.classList.remove('work__project_focus');
		hitField.classList.remove('work__hit-field_focus');
		agency.classList.remove('work__agency_focus');
		projectName.classList.remove('work__project-name_focus');
		meta.classList.remove('work__meta_focus');
	}
	
	function onMouseEnter() {
		addClasses();
	}
	
	function onMouseLeave() {
		removeClasses();
	}
	
	return {
		activate: activate,
		deactivate: deactivate
	}
	
}

module.exports = Project;