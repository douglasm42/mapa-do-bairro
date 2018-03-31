import React, { Component } from 'react';

import DetailsClose from './details_close';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let title;
    let header;
    let body;

    const place = this.props.place;

    if(place) {
      title = place.name;
      header = (
        <header className='details-header'>
          <h2 className="details-title">{title}</h2>
          <DetailsClose onClose={this.props.onClose} />
        </header>
      );

      body = (
        <div className='details-body'>
          lat: {place.lat} lng: {place.lng}
        </div>
      )
    }
    
    return (
      <div className={'details' + (this.props.show ? '' : ' details-hide')}>
        {header}
        {body}
      </div>
    );
  }
}
