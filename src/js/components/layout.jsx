import React, { Component } from 'react';

import Header from './header';
import SideBar from './sidebar';
import MapContainer from './map_container';
import Loading from './loading';
import Details from './details';

// Componente raíz da aplicação. Guarda maior parte do estado da aplicação.
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

  // Recebe o evento de click do botão no cabeçalho que mostra a barra lateral
  onSideBarToggle() {
    this.setState(function (prevState, props) {
      return {
        showSideBar: (prevState.showSideBar ? false : true)
      };
    });
  }

  // Esta função é executada quando a API do Google terminou de carregar e
  // o mapa está pronto para ser usado.
  onGoogleMapsLoad() {
    this.setState({loaded: true});
  }

  // Abre o painel de detalhes e mostra detalhes sobre o lugar passado por
  // parametro. Esta função é vunculada aos eventos de click dos itens
  // da barra lateral e dos marcadores do mapa.
  showDetails(place) {
    const map = this.props.map;
    let prevPlace = this.state.detailedPlace;

    // Muda a cor do marcador selecionado
    place.marker.setSelected();

    // Verifica se tinha algum marcador selecionado e
    // desmarca ele.
    if (prevPlace) {
      prevPlace.marker.setUnselected();
    }

    // Atualiza o estado para mostrar o novo lugar nos detalhes
    // e fechar a barra lateral se ela estiver aberta.
    this.setState({ detailedPlace: place, showSideBar: false });

    // Centraliza o mapa na posição quando a animação do painel
    // de detalhes terminar.
    setTimeout(() => map.panToPosition(place.position), 200);
  }

  // Função executada quando o painel de detalhes é fechado
  onHideDetails() {
    let map = this.props.map;
    // Desmarca o marcador no mapa
    this.state.detailedPlace.marker.setUnselected();

    // Remove o lugar detalhado
    this.setState({ detailedPlace: null });

    // Espera a animação terminar e enquadra todos os pontos visiveis no mapa
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
