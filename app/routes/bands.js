import Ember from 'ember';
import Band from '../models/band';

export default Ember.Route.extend({
	model: function() {
		return this.store.findAll('band');
	},

	actions: {
		didTransition: function() {
			document.title = 'Bands - Rock & Roll';
		},

		createBand: function() {
			var name    = this.get('controller').get('name');
			var newBand = Band.create({ name: name });

			//bands.get('content').pushObject(newBand);
			this.get('controller').set('name', '');
			this.transitionTo('bands.band.songs', newBand);
		}
	}
});
