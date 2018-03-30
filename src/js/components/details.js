import React, { Component } from 'react';

import DetailsClose from './details_close';

export default class Details extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let text = 'Teste';
    for (let i = 0; i < 1000; i++) {
      text += ' teste';
    }
    text += ' aqui!';

    return (
      <div className={'details' + (this.props.show ? '' : ' details-hide')}>
        <header className='details-header'>
          <h2 className="details-title">{this.props.title}</h2>
          <DetailsClose onClose={this.props.onClose} />
        </header>
        <div className='details-body'>
          {text}
        </div>
      </div>
    );
  }
}
