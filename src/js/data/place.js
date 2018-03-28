export default class PlaceData {
  constructor(id, name, lat, lng) {
    this.id = id;
    this.name = name;
    this.lat = lat;
    this.lng = lng;
  }

  getCoord() {
    return {lat: this.lat, lng: this.lng};
  }
}