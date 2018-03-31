import React, { Component } from 'react';
import Request from 'superagent';

import DetailsClose from './details_close';

export default class DetailsBody extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };

    this.onReceiveData = this.onReceiveData.bind(this);
  }

  fetchData(place) {
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
    Request.get(url).query(query).then(this.onReceiveData).catch(error => console.log(error));
  }

  onReceiveData(response) {
    const pages = response.body.query.pages;
    for (var key in pages) {
      if (pages.hasOwnProperty(key)) {
        const page = pages[key];
        console.log(page.title);
        console.log(page.extract);
        this.setState({data: page.extract});
      }
    }
  }

  componentDidMount() {
    const place = this.props.place;
    this.fetchData(place);
    console.log(place);
  }

  render() {
    const place = this.props.place;

    let body;
    if (this.state.data) {
      body = (
        <div className='details-body'>
          {this.state.data}
        </div>
      );
    } else {
      body = (
        <div className='details-body'>
          Carregando... {place ? place.name : '??'}
        </div>
      );
    }
    return body;
  }
}
