export default class PlaceData {
  constructor(name, lat, lng) {
    this.id = 0;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }

  getCoord() {
    return {lat: this.lat, lng: this.lng};
  }
}
