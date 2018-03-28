import React, { Component } from 'react';

export default class MenuItem extends Component {
  render() {
    return (
      <li className='place'>{this.props.name}</li>
    );
  }
}
