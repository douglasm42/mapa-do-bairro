import React, { Component } from 'react';

import Header from './header';
import SideBar from './sidebar';
import MapContainer from './map_container';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {showSideBar: false};

    this.onMenuToggle = this.onMenuToggle.bind(this);
  }

  onMenuToggle() {
    this.setState(function (prevState, props) {
      return {
        showSideBar: (prevState.showSideBar ? false : true)
      };
    });
  }

  render() {
    return (
      <div className='container'>
        <Header onMenuToggle={this.onMenuToggle} />
        <SideBar show={this.state.showSideBar} places={this.props.places} />
        <MapContainer />
      </div>
    );
  }
}
