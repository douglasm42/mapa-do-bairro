import React, { Component } from 'react';
import Request from 'superagent';

// Exibe as informações obtidas pela API da wikipédia
export default class DetailsBody extends Component {
  constructor(props) {
    super(props);
    this.state = { place: props.place, data: null, success: null };

    this.onReceiveData = this.onReceiveData.bind(this);
    this.onFetchError = this.onFetchError.bind(this);
  }

  // Verifica se a propriedade mudou para garantir que
  // o conteúdo do componente atualize corretamente
  static getDerivedStateFromProps(nextProps, prevState) {
    const prevPlace = prevState.place;
    const nextPlace = nextProps.place;
    if (nextPlace !== prevPlace) {
      return {place: nextPlace, data: null, success: null};
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
      .on('error', this.onFetchError)
      .then(this.onReceiveData);
  }

  // Recebe o resultado da requisição e atualiza o conteúdo com o resultado
  onReceiveData(response) {
    const responsePages = response.body.query.pages;

    // Extrai as paginas do resultado da busca
    let pages = []
    for (var key in responsePages) {
      if (responsePages.hasOwnProperty(key)) {
        const page = responsePages[key];
        pages.push(page)
      }
    }

    // A busca deve retornar apenas uma página e ela deve ser válida
    if(pages.length == 1) {
      if(pages[0].extract) {
        this.setState({data: pages[0].extract, success: true});
      } else {
        this.setState({ data: 'Busca não retornou resultados.', success: false });
      }
    } else {
      this.setState({ data: 'Busca retornou mais de um resultado.', success: false });
    }
  }

  // Callback para a chamada da API
  onFetchError(error) {
    window.errorwiki = error;
    this.setState({ data: 'Não foi possivel carregar os detalhes do lugar.', success: false });
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
    if (this.state.success === true) {
      body = (
        <div className='details-body'>
          <p className='bold'>Descrição na Wikipédia:</p>
          <p>{this.state.data}</p>
          <a href={'https://pt.wikipedia.org/wiki/' + place.wikipedia} className='link' target='_blank'>Saiba Mais</a>
        </div>
      );
    } else if (this.state.success === false) {
      body = (
        <div className='details-body error'>
          <p className='bold'>Ocorreu um erro:</p>
          <p>{this.state.data}</p>
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
