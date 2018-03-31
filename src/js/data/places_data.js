import PlacesContainer from './places_container';
import Place from './place';

import places_data from './places_data.json';

export let places = new PlacesContainer();

places_data.forEach(p => {
  places.add(new Place(p.name, p.lat, p.lng, p.wikipedia));
});
