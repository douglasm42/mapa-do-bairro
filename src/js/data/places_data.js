import PlacesContainer from './places_container';

// Importa os dados dos lugares de um arquivo json
import places_data_json from './places_data.json';

// Expota o container de lugares
export let places = new PlacesContainer();

// Adiciona os lugares ao container
places_data_json.forEach(p => {
  places.add(p);
});
