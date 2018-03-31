import React, { Component } from 'react';

import MenuItem from './menu_item'

export default class MenuList extends Component {
  render() {
    // const filteredPlaces = this.props.places.filter((item) => 
    //   item.name.toLowerCase().includes(this.props.filter.toLowerCase())
    // );
    const places = this.props.places.filteredPlaces.map((item) =>
      <MenuItem key={item.id.toString()} place={item} onSelect={this.props.onSelectPlace} />
    );

    return (
      <ul className='places'>
        {places}
      </ul>
    );
  }
}
