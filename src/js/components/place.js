import React, { Component } from 'react';

export default class Place extends Component {
  render() {
    return (
      <li className='place'>{this.props.name}</li>
    );
  }
}
