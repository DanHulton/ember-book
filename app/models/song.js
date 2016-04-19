import Ember from 'ember';

let Song = Ember.Object.extend({
	title: '',
	rating: 0,
	band: null
});
Song[Ember.NAME_KEY] = 'song';

export default Song;