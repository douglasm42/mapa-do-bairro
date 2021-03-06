import PlacesContainer from './places_container';

// Expota o container de lugares
export let places = new PlacesContainer();

// Dados dos lugares a serem exibidos no aplicativo
let places_data = [
  {
    name: "Palácio das Esmeraldas", // Nome do lugar
    position: { // Posição no formato usado pela API do Google Maps
      lat: -16.681105,
      lng: -49.256208
    },
    wikipedia: "Palácio_das_Esmeraldas" // Nome do artigo na wikipédia
  },
  {
    name: "Correios",
    position: {
      lat: -16.679806,
      lng: -49.257677
    },
    wikipedia: "Empresa_Brasileira_de_Correios_e_Telégrafos"
  },
  {
    name: "PUC Goiás",
    position: {
      lat: -16.678510,
      lng: -49.245315
    },
    wikipedia: "Pontifícia_Universidade_Católica_de_Goiás"
  },
  {
    name: "Estádio Serra Dourada",
    position: {
      lat: -16.699252,
      lng: -49.234222
    },
    wikipedia: "Estádio_Serra_Dourada"
  },
  {
    name: "Shopping Flamboyant",
    position: {
      lat: -16.710521,
      lng: -49.236425
    },
    wikipedia: "Flamboyant_Shopping_Center"
  },
  {
    name: "Parque Vaca Brava",
    position: {
      lat: -16.710085,
      lng: -49.270879
    },
    wikipedia: "Parque_Vaca_Brava"
  },
  {
    name: "Bosque dos Buritis",
    position: {
      lat: -16.682040,
      lng: -49.261581
    },
    wikipedia: "Bosque_dos_Buritis_(Goiânia)"
  },
  {
    name: "Parque Areião",
    position: {
      lat: -16.707157,
      lng: -49.256633
    },
    wikipedia: "Parque_Areião"
  }
]

// Adiciona os lugares ao container
places_data.forEach(p => {
  places.add(p);
});
