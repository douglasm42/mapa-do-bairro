export default class Marker {
  constructor(place) {
    this.place = place;
    this.place.marker = this;
    this.marker_obj = new google.maps.Marker({
      //icon: image,
      title: place.name,
      position: place.getCoord()
    });

    this.onClick = this.onClick.bind(this);

    this.marker_obj.addListener('click', this.onClick);
  }

  onClick() {
    window.showDetails(this.place);
    this.marker_obj.getMap().setZoom(16);
    this.marker_obj.getMap().panTo(this.marker_obj.getPosition());
  }

  setMap(map) {
    this.marker_obj.setMap(map);
  }
}