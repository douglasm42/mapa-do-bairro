import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Layout from './components/layout';

import { places } from './data/places_data';
import { map } from './map/map';

import '../css/main.scss';

let app = document.getElementById('app');
if(app) {
  ReactDOM.render(<Layout places={places} map={map} />, app);
}

// loadGoogleMapsAPI();
