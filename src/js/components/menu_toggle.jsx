import React, { Component } from 'react';

// Botão para exibir a barra de navegação do aplicativo
export default class MenuToggle extends Component {
  render() {
    return (
      <a href="#" className="menu" onClick={this.props.onToggle}>&#9776;</a>
    );
  }
}
