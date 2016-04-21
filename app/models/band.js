import Ember from 'ember';

var Band = Ember.Object.extend({
	name: '',
	description: '',

	slug: Ember.computed('name', function() {
		return this.get('name').dasherize();
	}),

	setupSongs: Ember.on('init', function() {
		if (!this.get('songs')) {
			this.set('songs', []);
		}
	})
});
Band[Ember.NAME_KEY] = 'band';

export default Band;