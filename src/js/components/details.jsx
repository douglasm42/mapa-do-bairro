import React, { Component } from 'react';

import DetailsClose from './details_close';
import DetailsBody from './details_body';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let header;
    let body;

    const place = this.props.place;
    if(place) {
      header = (
        <header className='details-header'>
          <h2 className="details-title">{place.name}</h2>
          <DetailsClose onClose={this.props.onClose} />
        </header>
      );

      body = (
        <DetailsBody place={place} />
      );
    }
    const hide = this.props.place ? '' : ' details-hide';

    return (
      <article className={'details' + hide}>
        {header}
        {body}
      </article>
    );
  }
}
