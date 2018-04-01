// Classe para armazenar as informações dos lugares
// e aplicar o filtro.
export default class PlacesContainer {
  constructor() {
    this.allPlaces = [];
    this.filteredPLaces = [];
    this.filter = '';
    this.next_id = 1;
    this.applyFilter(this.filter);
  }

  // Aplica o filtro e atualiza o vetor de lugares filtrados.
  applyFilter(filter) {
    this.filter = filter.toLowerCase();
    this.filteredPlaces = this.allPlaces.filter((item) =>
      item.name.toLowerCase().includes(this.filter)
    );
  }

  // Adiciona um novo lugar e aplica o último filtro
  add(place) {
    place.id = this.next_id;
    this.next_id++;
    this.allPlaces.push(place);
    this.applyFilter(this.filter);
  }
}
