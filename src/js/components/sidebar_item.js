import React, { Component } from 'react';

// Item da lista de lugares na barra de navegação
export default class SideBarItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.place.marker.setClickListener(this.handleClick);
  }

  handleClick() {
    this.props.onSelect(this.props.place);
  }

  render() {
    return (
      <li className='place'>
        <a className='place-link' href='#' onClick={this.handleClick}>{this.props.place.name}</a>
      </li>
    );
  }
}
