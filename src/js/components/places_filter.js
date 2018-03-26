import React, { Component } from 'react';

export default class PlacesFilter extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleChange(e.target.value);
  }

  render() {
    return (
      <div className="filter-container">
        <input className="filter" type="text" placeholder="Busca" onChange={this.handleChange}/>
      </div>
    );
  }
}
