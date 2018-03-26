import React, { Component } from 'react';

import PlacesFilter from './places_filter';
import PlacesList from './places_list';

export default class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state = {filter: ''};

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value) {
    this.setState({filter: value});
  }

  render() {
    return (
      <nav id='sidebar' className={this.props.show ? 'sidebar-show' : 'sidebar-hide'}>
        <PlacesFilter handleChange={this.handleFilterChange} />
        <PlacesList filter={this.state.filter} />
      </nav>
    );
  }
}
