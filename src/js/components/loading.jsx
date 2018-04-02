import React, { Component } from 'react';

// Tela de carregamento
// é exibida enquanto o carregamento da API do Google Maps é feita
export default class Loading extends Component {
  render() {
    const hide = this.props.loaded ? ' loading-hide' : '';
    let message;
    if(this.props.loadError) {
      message = (
        <p className='loading-subtitle loading-error'>
          Não foi possivel carregar o mapa.
          <br/>
          Recarregue a página.
        </p>
      );
    } else {
      message = <p className='loading-subtitle'>Carregando...</p>;
    }
    return (
      <article className={'loading' + hide}>
        <h1 className='loading-title'>
          Goiânia
          {message}
        </h1>
      </article>
    );
  }
}
