import React, { Component } from 'react';

export default class PlacesList extends Component {
  render() {
    return (
      <ul className='places'>
        <li className='place'>Filtro: {this.props.filter}</li>
        <li className='place'>Placeholder</li>
        <li className='place'>Placeholder</li>
        <li className='place'>Placeholder</li>
      </ul>
    );
  }
}
