import React, { Component } from 'react';

import MenuToggle from './menu_toggle';

export default class Header extends Component {
  render() {
    return (
      <header className='topbar'>
        <MenuToggle onToggle={this.props.onMenuToggle}/>
        <h1 className="title">Goiânia</h1>
      </header>
    );
  }
}
