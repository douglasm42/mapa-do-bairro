import React, { Component } from 'react';

import Header from './header';
import SideBar from './sidebar';
import MapContainer from './map_container';
import Loading from './loading';
import Details from './details';

export default class Layout extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSideBar: false,
      loaded: false,
      showDetails: false,
      detailedPlace: null
    };

    this.onMenuToggle = this.onMenuToggle.bind(this);
    this.onGoogleMapsLoad = this.onGoogleMapsLoad.bind(this);
    this.onShowDetails = this.onShowDetails.bind(this);
    this.onHideDetails = this.onHideDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
    window.onGoogleMapsLoad  = this.onGoogleMapsLoad;
    window.showDetails = this.showDetails;
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

  showDetails(place) {
    this.setState({ detailedPlace: place, showSideBar: false });
    this.onShowDetails();
  }

  onShowDetails() {
    this.setState({ showDetails: true });
  }

  onHideDetails() {
    this.setState({ showDetails: false, detailedPlace: null });
    setTimeout(window.panToPlaces, 200)
  }

  render() {
    return (
      <div className='container'>
        <Header onMenuToggle={this.onMenuToggle} />
        <SideBar loaded={this.state.loaded} show={this.state.showSideBar} places={this.props.places} onSelectPlace={this.showDetails} />
        <MapContainer small={this.state.showDetails} />
        <Details place={this.state.detailedPlace} show={this.state.showDetails} onClose={this.onHideDetails} />
        <Loading loaded={this.state.loaded} />
      </div>
    );
  }
}
