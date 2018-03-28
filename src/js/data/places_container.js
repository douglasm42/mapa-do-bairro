export default class PlacesContainer {
  constructor() {
    this.places = [];
    this.filteredPLaces = [];
    this.filter = '';
    this.next_id = 1;
    this.applyFilter(this.filter);
  }

  applyFilter(filter) {
    this.filter = filter.toLowerCase();
    this.filteredPlaces = this.places.filter((item) =>
      item.name.toLowerCase().includes(this.filter)
    );
  }

  add(place) {
    place.id = this.next_id;
    this.next_id++;
    this.places.push(place);
    this.applyFilter(this.filter);
  }
}
