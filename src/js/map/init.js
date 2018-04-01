import { map } from './map';
import { places } from '../data/places_data';

// Função de callback para ser executada quando a API do Google Maps
// terminar de carregar.
function initMap() {
  this.init();
  this.panToPlaces();
  this.onGoogleMapsLoad();
}

// Torna a função de inicialização global e vinculada ao mapa.
window.initMap = initMap.bind(map);

// Minha APIKey para usar a API do Google.
const APIKey = 'AIzaSyA7oz8Q4iD0yb1Qkokep8DAz78j27XjpfQ';

// Adiciona o script da API no html e inicialia o carregamento.
// Quando concluido a função initMap é executada e as funcionalidades
// da aplicação são ativadas.
export function loadGoogleMapsAPI() {
  const script = document.createElement("script");
  const url = 'https://maps.googleapis.com/maps/api/js'
  // script.src = `${url}?key=${APIKey}&callback=initMap&libraries=places`;
  script.src = `${url}?key=${APIKey}&callback=initMap`;
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
}
