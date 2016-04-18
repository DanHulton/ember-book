import Ember from 'ember';

// Definitions

var Band = Ember.Object.extend({
	name: '',
	slug: Ember.computed('name', function() {
		return this.get('name').dasherize();
	})
});
Band[Ember.NAME_KEY] = 'band';

let Song = Ember.Object.extend({
	title: '',
	rating: 0,
	band: ''
});
Song[Ember.NAME_KEY] = 'song';

var BandsCollection = Ember.Object.extend({
	content: [],
	sortProperties: ['name:desc'],
	sortedContent: Ember.computed.sort('content', 'sortProperties'),
});
BandsCollection[Ember.NAME_KEY] = 'bands-collection';

// Songs

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

let pretender = Song.create({
	title: 'The Pretender',
	band: 'Foo Fighters',
	rating: 5
});

let walk = Song.create({
	title: 'Walk',
	band: 'Foo Fighters',
	rating: 5
});

// Bands

var ledZeppelin = Band.create({ name: 'Led Zeppelin', songs: [blackDog] });
var pearlJam    = Band.create({ name: 'Pearl Jam', songs: [yellowLedbetter] });
var fooFighters = Band.create({ name: 'Foo Fighters', songs: [pretender, walk] });

var bands = BandsCollection.create();
bands.get('content').pushObjects([ledZeppelin, pearlJam, fooFighters]);

export default Ember.Route.extend({
	model: function() {
		return bands;
	}
});
