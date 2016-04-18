import Ember from 'ember';

// Definitions

var Band = Ember.Object.extend({
	name: '',
	slug: Ember.computed('name', function() {
		return this.get('name').dasherize();
	})
});

let Song = Ember.Object.extend({
	title: '',
	rating: 0,
	band: ''
});

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

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
	model: function() {
		return bands;
	}
});
