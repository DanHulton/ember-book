import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('bands.band');
	},

	actions: {
    	willTransition: function(transition) {
      		var controller = this.get('controller');
      		if (controller.get('isEditing')) {
        		let leave = window.confirm("You have unsaved changes. Are you sure you want to leave?");
        		if (leave) {
          			controller.set('isEditing', false);
        		} else {
          			transition.abort();
          		}
        	}
      	}
    }
});
