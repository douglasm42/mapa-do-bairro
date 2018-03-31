import React, { Component } from 'react';

import {loadGoogleMapsAPI} from '../map/init';

export default class MapContainer extends Component {
  componentDidMount() {
    //Inicializar o mapa
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
