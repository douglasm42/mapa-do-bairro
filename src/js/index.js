import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Map from './map';

import Layout from './components/layout'

import '../css/main.scss'
// import img from '../img/menu-icon.svg'
// import img2 from '../img/menu-icon-2.svg'

console.log("Hello World!");

export default class Hello extends Component {
  render() {
    return (
      <div>
        <div id='map'></div>
      </div>
    );
  }
}

function showSidebar() {
  document.getElementById('sidebar').style.left = 0;
}

function hideSidebar() {
  let sidebar = document.getElementById('sidebar');
  sidebar.style.left = -sidebar.style.width;
}

function toggleSidebar() {
  let sidebar = document.getElementById('sidebar');
  console.log(sidebar.style.left);
  if(sidebar.offsetLeft != 0) {
    //sidebar.style.left = 0;
    sidebar.classList.remove("sidebar-hide");
    sidebar.classList.add("sidebar-show");
    console.log("Mostrando sidebar!");
  } else {
    //sidebar.style.left = (-sidebar.offsetWidth) + 'px';
    //sidebar.style.left = '-100%';
    sidebar.classList.remove("sidebar-show");
    sidebar.classList.add("sidebar-hide");
    console.log("Escondendo sidebar!");
    console.log(-sidebar.offsetWidth);
    let style = getComputedStyle(sidebar)
    console.log("Style width: " + style.width);
  }
}

window.toggleSidebar = toggleSidebar;

// ReactDOM.render(<Layout/>, document.getElementById('app'));

// loadGoogleMapsAPI();
