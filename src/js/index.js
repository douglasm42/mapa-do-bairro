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

let app = document.getElementById('app');
if(app) {
  ReactDOM.render(<Layout />, app);
}

// ReactDOM.render(<Layout/>, document.getElementById('app'));

// loadGoogleMapsAPI();
