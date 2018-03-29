import React, { Component } from 'react';

import Header from './header';
import SideBar from './sidebar';
import MapContainer from './map_container';
import Loading from './loading';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {showSideBar: false, loaded: false};

    this.onMenuToggle = this.onMenuToggle.bind(this);
    this.onGoogleMapsLoad = this.onGoogleMapsLoad.bind(this);
    window.onGoogleMapsLoad  = this.onGoogleMapsLoad;
  }

  onMenuToggle() {
    this.setState(function (prevState, props) {
      return {
        showSideBar: (prevState.showSideBar ? false : true)
      };
    });
  }

  onGoogleMapsLoad() {
    this.setState({loaded: true});
  }

  render() {
    return (
      <div className='container'>
        <Header onMenuToggle={this.onMenuToggle} />
        <SideBar loaded={this.state.loaded} show={this.state.showSideBar} places={this.props.places} />
        <MapContainer />
        <Loading loaded={this.state.loaded} />
      </div>
    );
  }
}
