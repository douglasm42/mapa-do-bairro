import React, { Component } from 'react';

import MenuItem from './menu_item'

// Exibe a lista de lugares na barra de navegação
export default class MenuList extends Component {
  render() {
    // Obtém os lugares a serem exibidos a partir da lista
    // filtrada de lugares.
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
