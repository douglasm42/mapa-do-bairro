import React, { Component } from 'react';

export default class MenuToggle extends Component {
  constructor(props) {
    super(props);
    this.handleCLick = this.handleCLick.bind(this);
  }

  handleCLick(e) {
    this.props.onToggle();
  }

  render() {
    return (
      <a href="#" className="menu" onClick={this.handleCLick}>&#9776;</a>
    );
  }
}
