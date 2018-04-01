import React, { Component } from 'react';

// Botão para fechar a janela de detalhes
export default class DetailsClose extends Component {
  render() {
    return (
      <a href="#" className="details-close" onClick={this.props.onClose}>
        &times;
      </a>
    );
  }
}
