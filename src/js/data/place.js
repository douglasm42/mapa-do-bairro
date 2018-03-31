export default class PlaceData {
  constructor(name, lat, lng, wikipedia) {
    this.id = 0;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
    this.wikipedia = wikipedia;
  }

  getCoord() {
    return {lat: this.lat, lng: this.lng};
  }
}
