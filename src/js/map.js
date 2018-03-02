export default class Map {
	constructor(center, zoom) {
		this.map = new google.maps.Map(document.getElementById('map'), {
			center: point,
			zoom: 14
		});
	}
}
