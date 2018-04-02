import React, { Component } from 'react';

import SideBarFilter from './sidebar_filter';
import SideBarList from './sidebar_list';

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
    this.props.map.filterMarkers();
    this.props.map.panToPlaces();
  }

  render() {
    const hide = this.props.show ? ' sidebar-show' : ' sidebar-hide';
    return (
      <nav className={'sidebar' + hide}>
        <SideBarFilter handleChange={this.handleFilterChange} />
        <SideBarList
          filter={this.state.filter}
          places={this.props.places}
          map={this.props.map}
          onSelectPlace={this.props.onSelectPlace}
        />
      </nav>
    );
  }
}
