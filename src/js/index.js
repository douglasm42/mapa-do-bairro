import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Map from './map';

import '../css/main.scss'

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
		sidebar.style.left = 0;
		console.log("Mostrando sidebar!");
	} else {
		sidebar.style.left = (-sidebar.offsetWidth)+'px';
		console.log("Escondendo sidebar!");
		console.log(-sidebar.offsetWidth);
	}
}

window.toggleSidebar = toggleSidebar;

// ReactDOM.render(<Hello/>, document.getElementById('app'));

// loadGoogleMapsAPI();
