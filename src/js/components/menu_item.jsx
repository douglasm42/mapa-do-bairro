import React, { Component } from 'react';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onSelect(this.props.place);
    this.props.place.marker.onClick();
  }

  render() {
    return (
      <li className='place'>
        <a className='place-link' href='#' onClick={this.handleClick}>{this.props.place.name}</a>
      </li>
    );
  }
}
