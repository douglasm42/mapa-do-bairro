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
      detailedPlace: null
    };

    this.onSideBarToggle = this.onSideBarToggle.bind(this);
    this.onGoogleMapsLoad = this.onGoogleMapsLoad.bind(this);
    this.onHideDetails = this.onHideDetails.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  onSideBarToggle() {
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
    let prevPlace = this.state.detailedPlace;

    // Faz o marcador anterior parar de pular
    place.marker.bounce(true);
    if (prevPlace) {
      prevPlace.marker.bounce(false);
    }

    this.setState({ detailedPlace: place, showSideBar: false });
    this.props.map.panToPosition(place.position);
  }

  onHideDetails() {
    let map = this.props.map;
    this.detailedPlace.marker.bounce(false);
    this.setState({ detailedPlace: null });
    setTimeout(map.panToPlaces.bind(map), 200);
  }

  render() {
    let sidebar;
    let details;

    // Só exibe a sidebar e a tela de detalhes depois do mapa ter carregado
    if(this.state.loaded) {
      sidebar = <SideBar
        show={this.state.showSideBar}
        places={this.props.places}
        map={this.props.map}
        onSelectPlace={this.showDetails}
      />;

      details = <Details
        place={this.state.detailedPlace}
        map={this.props.map}
        onClose={this.onHideDetails}
      />;
    }

    return (
      <section className='container'>
        <Header onSideBarToggle={this.onSideBarToggle} />
        {sidebar}
        <MapContainer
          map={this.props.map}
          small={this.state.detailedPlace !== null}
          onGoogleMapsLoad={this.onGoogleMapsLoad}
        />
        {details}
        <Loading loaded={this.state.loaded} />
      </section>
    );
  }
}
