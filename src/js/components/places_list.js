import React, { Component } from 'react';

import Place from './place'

export default class PlacesList extends Component {
  render() {
    const places = this.props.places.map((item) =>
      <Place key={item.id.toString()} name={item.name} />
    );

    return (
      <ul className='places'>
        <li className='place'>Filtro: {this.props.filter}</li>
        {places}
      </ul>
    );
  }
}
