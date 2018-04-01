import React, { Component } from 'react';

import { loadGoogleMapsAPI } from '../map/init';

// Container para o mapa do google
export default class MapContainer extends Component {
  componentDidMount() {
    // Registra o listener para indicar quando o mapa for carregado
    this.props.map.setOnLoadListener(this.props.onGoogleMapsLoad);

    //Inicializar o carregamento do Google Maps
    loadGoogleMapsAPI();
  }

  render() {
    return (
      <article className={'map-container' + (this.props.small ? ' map-container-small' : '')}>
        <div id='map'>
          Carregando...
        </div>
      </article>
    );
  }
}
