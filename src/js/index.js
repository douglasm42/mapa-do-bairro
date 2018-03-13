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

// ReactDOM.render(<Hello/>, document.getElementById('app'));

// loadGoogleMapsAPI();
