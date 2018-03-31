import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <article className={'loading' + (this.props.loaded ? ' loading-hide' : '')}>
        <h1 className='loading-title'>
          Goiânia
          <p className='loading-subtitle'>Carregando...</p>
        </h1>
      </article>
    );
  }
}
