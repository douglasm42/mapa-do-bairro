import React, { Component } from 'react';

import Place from './place'

export default class PlacesList extends Component {
  render() {
    const filteredPlaces = this.props.places.filter((item) => 
      item.name.toLowerCase().includes(this.props.filter.toLowerCase())
    );
    const places = filteredPlaces.map((item) =>
      <Place key={item.id.toString()} name={item.name} />
    );

    return (
      <ul className='places'>
        {places}
      </ul>
    );
  }
}
