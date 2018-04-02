import Marker from './marker';
import { places } from '../data/places_data';

// Posição do centro do mapa
let goiania = { lat: -16.680650, lng: -49.256318 };

// Classe para controlar o mapa
class Map {
  constructor(center, zoom, places) {
    this.center = center;
    this.zoom = zoom;
    this.places = places;
    this.loaded = false;
    this.onGoogleMapsLoad = null;
    this.onGoogleError = null;
  }

  init() {
    // Verifica se o mapa já foi inicializado
    if(this.loaded) {
      throw "Mapa já foi inicializado!";
    }

    // Esconde pontos de interesse padrão no mapa
    const myStyles = [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      },
      {
        featureType: "transit.station.bus",
        stylers: [
          { visibility: "off" }
        ]
      }
    ];

    // Cria o mapa
    this.map_obj = new google.maps.Map(document.getElementById('map'), {
      center: this.center,
      zoom: this.zoom,
      mapTypeControl: false,
      fullscreenControl: false,
      streetViewControl: false,
      styles: myStyles
    });

    // Cria Marcadores para os lugares
    this.places.allPlaces.forEach(p => {
      let marker = new Marker(p);
      marker.show(this);
    });

    // Indica que a inicialização foi concluida
    this.loaded = true;

    this.onGoogleMapsLoad();
  }

  setOnLoadListener(onSuccess, onError) {
    this.onGoogleMapsLoad = onSuccess;
    this.onGoogleError = onError;
  }

  // Esconde todos os marcadores e exibe somente os que
  // passaram no filtro de lugares.
  // Só pode ser executada depois da conclusão do carregamento.
  filterMarkers() {
    if(this.loaded) {
      this.places.allPlaces.forEach(p => {
        p.marker.hide();
      });
      this.places.filteredPlaces.forEach(p => {
        p.marker.show(this);
      });
    } else {
      throw "Mapa não inicializado!";
    }
  }

  // Move o mapa paa a posição passada por parametro.
  // Só pode ser executada depois da conclusão do carregamento.
  panToPosition(position) {
    if (this.loaded) {
      this.map_obj.setZoom(16);
      this.map_obj.panTo(position);
    } else {
      throw "Mapa não inicializado!";
    }
  }

  // Ajusta o mapa para mostrar todos os lugares
  // visiveis no mapa.
  // Só pode ser executada depois da conclusão do carregamento.
  panToPlaces() {
    if (this.loaded) {
      const filteredPlaces = this.places.filteredPlaces;
      if(filteredPlaces.length > 1) {
        let bounds = new google.maps.LatLngBounds();
        this.places.filteredPlaces.forEach(p => {
          bounds.extend(p.position);
        });
        this.map_obj.fitBounds(bounds);
      } else if(filteredPlaces.length === 1) {
        this.panToPosition(this.places.filteredPlaces[0].position);
      }
    } else {
      throw "Mapa não inicializado!";
    }
  }
}

// Exporta o objeto do mapa em vez da classe.
// Assim só pode existir um objeto desta classe.
// Uma forma de singleton.
export let map = new Map(goiania, 14, places);
