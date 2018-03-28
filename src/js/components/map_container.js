import React, { Component } from 'react';

import {loadGoogleMapsAPI} from '../map/init';

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
