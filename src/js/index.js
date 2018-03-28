import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Map from './map';

import Layout from './components/layout'

import '../css/main.scss'

function toggleSidebar() {
  let sidebar = document.getElementById('sidebar');
  if(sidebar.classList.contains('sidebar-hide')) {
    sidebar.classList.remove("sidebar-hide");
    sidebar.classList.add("sidebar-show");
    console.log("Mostrando sidebar!");
  } else {
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hide");
    console.log("Escondendo sidebar!");
    console.log(-sidebar.offsetWidth);
  }
}

window.toggleSidebar = toggleSidebar;

let places = [
  { id: 1, name: 'Papelaria' },
  { id: 2, name: 'Pet Shop' },
  { id: 3, name: 'Padaria' },
  { id: 4, name: 'Supermercado' },
  { id: 5, name: 'Cartório' },
  { id: 6, name: 'Praça' },
  { id: 7, name: 'Estátua' },
];

let app = document.getElementById('app');
if(app) {
  ReactDOM.render(<Layout places={places} />, app);
}

// loadGoogleMapsAPI();
