import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout';

import {places} from './data/places_data';

import '../css/main.scss';

console.log(places);

let app = document.getElementById('app');
if(app) {
  ReactDOM.render(<Layout places={places} />, app);
}

// loadGoogleMapsAPI();
