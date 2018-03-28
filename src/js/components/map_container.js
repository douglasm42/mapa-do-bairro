import React, { Component } from 'react';

import Map, {loadGoogleMapsAPI} from '../map/map';

export default class MapContainer extends Component {
  componentDidMount() {
    //Inicializar o mapa
    loadGoogleMapsAPI();
  }

  render() {
    return (
      <div className='map-container'>
        <div id='map'>
          Carregando...
        </div>
      </div>
    );
  }
}
