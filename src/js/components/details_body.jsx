import React, { Component } from 'react';
import Request from 'superagent';

// Exibe as informações obtidas pela API da wikipédia
export default class DetailsBody extends Component {
  constructor(props) {
    super(props);
    this.state = { place: props.place, data: null };

    this.onReceiveData = this.onReceiveData.bind(this);
  }

  // Verifica se a propriedade mudou para garantir que
  // o conteúdo do componente atualize corretamente
  static getDerivedStateFromProps(nextProps, prevState) {
    const prevPlace = prevState.place;
    const nextPlace = nextProps.place;
    if (nextPlace !== prevPlace) {
      return {place: nextPlace, data: null};
    }
    return null;
  }

  // Realiza uma requisição à API da Wikipédia
  fetchData() {
    const place = this.state.place;
    const url = 'https://pt.wikipedia.org/w/api.php';
    const query = {
      origin: '*',
      format: 'json',
      action: 'query',
      prop: 'extracts',
      exintro: '',
      explaintext: '',
      titles: place.wikipedia
    }
    Request.get(url)
      .query(query)
      .then(this.onReceiveData)
      .catch(error => console.log(error));
  }

  // Recebe o resultado da requisição e atualiza o conteúdo com o resultado
  onReceiveData(response) {
    const pages = response.body.query.pages;
    for (var key in pages) {
      if (pages.hasOwnProperty(key)) {
        const page = pages[key];
        this.setState({data: page.extract});
      }
    }
  }

  // Este método é executado quando o componente
  // é adicionado na pagina. Aqui é usado para
  // realizar a requisição.
  componentDidMount() {
    this.fetchData();
  }

  // Verifica se o estado mudou
  // Se foi modificado algo, requisita nova informação sobre
  // o local.
  componentDidUpdate(prevProps, prevState) {
    const place = this.state.place;
    if(place && prevState.place !== place) {
      this.fetchData();
    }
  }

  render() {
    const place = this.state.place;

    let body;
    if (this.state.data) {
      body = (
        <div className='details-body'>
          <p>Descrição na Wikipédia:</p>
          <p>{this.state.data}</p>
          <a href={'https://pt.wikipedia.org/wiki/' + place.wikipedia} className='details-link' target='_blank'>Saiba Mais</a>
        </div>
      );
    } else {
      body = (
        <div className='details-body'>
          <p>Carregando...</p>
        </div>
      );
    }
    return body;
  }
}
