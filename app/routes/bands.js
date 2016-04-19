import Ember from 'ember';
import Band from '../models/band';
import Song from '../models/song';

// Definitions

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
	},

	actions: {
		createBand: function() {
			var name    = this.get('controller').get('name');
			var newBand = Band.create({ name: name });

			bands.get('content').pushObject(newBand);
			this.get('controller').set('name', '');
		}
	}
});
