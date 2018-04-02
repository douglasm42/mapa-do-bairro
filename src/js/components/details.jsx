import React, { Component } from 'react';

import DetailsClose from './details_close';
import DetailsBody from './details_body';

// Painel de detalhes
// Possui um cabeçalho com título e um botão para fechar
// e o corpo com descrição e um linkpara o artigo na
// wikipédia.
export default class Details extends Component {
  render() {
    let header;
    let body;

    // Verifica um local foi selecionado para ser
    // detalhado.
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
