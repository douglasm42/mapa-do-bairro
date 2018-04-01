import React, { Component } from 'react';

import SideBarToggle from './sidebar_toggle';

// Exibe o cabeçalho da pagina com um botão para mostrar a barra lateral
export default class Header extends Component {
  render() {
    return (
      <header className='topbar'>
        <SideBarToggle onToggle={this.props.onSideBarToggle}/>
        <h1 className="title">Goiânia</h1>
      </header>
    );
  }
}
