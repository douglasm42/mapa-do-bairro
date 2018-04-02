import React, { Component } from 'react';

import SideBarItem from './sidebar_item'

// Exibe a lista de lugares na barra de navegação
export default class SideBarList extends Component {
  render() {
    // Obtém os lugares a serem exibidos a partir da lista
    // filtrada de lugares.
    const map = this.props.map;
    const places = this.props.places.filteredPlaces.map((item) =>
      <SideBarItem
        key={item.id.toString()}
        place={item}
        map={map}
        onSelect={this.props.onSelectPlace}
      />
    );

    return (
      <ul className='places'>
        {places}
      </ul>
    );
  }
}
