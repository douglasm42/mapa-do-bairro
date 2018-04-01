import React, { Component } from 'react';

// Tela de carregamento
// é exibida enquanto o carregamento da API do Google Maps é feita
export default class Loading extends Component {
  render() {
    const hide = this.props.loaded ? ' loading-hide' : '';
    return (
      <article className={'loading' + hide}>
        <h1 className='loading-title'>
          Goiânia
          <p className='loading-subtitle'>Carregando...</p>
        </h1>
      </article>
    );
  }
}
