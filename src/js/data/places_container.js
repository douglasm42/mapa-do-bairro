export default class PlacesContainer {
  constructor() {
    this.places = [];
    this.filteredPLaces = [];
    this.filter = '';
    this.applyFilter(this.filter);
  }

  applyFilter(filter) {
    this.filter = filter.toLowerCase();
    this.filteredPlaces = this.places.filter((item) =>
      item.name.toLowerCase().includes(this.filter)
    );
  }

  add(place) {
    this.places.push(place);
    this.applyFilter(this.filter);
  }
}
