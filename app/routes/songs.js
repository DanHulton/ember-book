import Ember from 'ember';

let Song = Ember.Object.extend({
	title: '',
	rating: 0,
	band: ''
});

let blackDog = Song.create({
	title: 'Black Dog',
	band: 'Led Zeppelin',
	rating: 3
});

let yellowLedbetter = Song.create({
	title: 'Yellow Ledbetter',
	band: 'Pearl Jam',
	rating: 4
});

var SongCollection = Ember.Object.extend({
	content: [],
	sortProperties: ['rating:desc'],
	sortedContent: Ember.computed.sort('content', 'sortProperties'),
});

var songs = SongCollection.create();
songs.get('content').pushObject(blackDog);
songs.get('content').pushObject(yellowLedbetter);
songs.get('content').pushObject(Song.create({
	title: 'The Pretender',
	band: 'Foo Fighters',
	rating: 5
}));

export default Ember.Route.extend({
	model: function() {
		return songs;
	}
});
