import Ember from 'ember';
import DS from 'ember-data';

var Band = DS.Model.extend({
	name: DS.attr('string'),
	description: DS.attr(),
	songs: DS.hasMany('songs'),

	slug: Ember.computed('name', function() {
		return this.get('name').dasherize();
	}),
});
Band[Ember.NAME_KEY] = 'band';

export default Band;