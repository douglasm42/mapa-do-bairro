import React, { Component } from 'react';
import Request from 'superagent';

import DetailsClose from './details_close';

export default class DetailsBody extends Component {
  constructor(props) {
    super(props);
    this.state = { place: props.place, data: null };

    this.onReceiveData = this.onReceiveData.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const prevPlace = prevState.place;
    const nextPlace = nextProps.place;
    if (nextPlace !== prevPlace) {
      if(prevPlace) {
        prevPlace.marker.bounce(false);
      }
      nextPlace.marker.bounce(true);
      return {place: nextPlace, data: null};
    }
    return null;
  }

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
    Request.get(url).query(query).then(this.onReceiveData).catch(error => console.log(error));;
  }

  onReceiveData(response) {
    const pages = response.body.query.pages;
    for (var key in pages) {
      if (pages.hasOwnProperty(key)) {
        const page = pages[key];
        this.setState({data: page.extract});
      }
    }
  }

  componentDidMount() {
    this.state.place.marker.bounce(true);
    this.fetchData();
  }

  componentWillUnmount() {
    this.state.place.marker.bounce(false);
  }

  componentDidUpdate(prevProps, prevState) {
    const place = this.state.place;
    if(place && prevState.place !== place) {
      this.fetchData(place);
    }
  }

  render() {
    const place = this.state.place;

    let body;
    if (this.state.data) {
      body = (
        <div className='details-body'>
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
