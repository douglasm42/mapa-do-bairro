import React, { Component } from 'react';

import MenuFilter from './menu_filter';
import MenuList from './menu_list';

// Exibe um campo de filtro e a lista de locais marcados no mapa
export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {filter: ''};

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value) {
    this.setState({filter: value});
    this.props.places.applyFilter(value);
    window.map.filterMarkers();
    window.panToPlaces();
  }

  render() {
    return (
      <nav className={'sidebar ' + (this.props.show ? 'sidebar-show' : 'sidebar-hide')}>
        <MenuFilter handleChange={this.handleFilterChange} />
        <MenuList filter={this.state.filter} places={this.props.places} onSelectPlace={this.props.onSelectPlace} />
      </nav>
    );
  }
}
