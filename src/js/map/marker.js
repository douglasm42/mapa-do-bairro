import redMarker from '../../img/marker-red.png';
// import blackMarker from '../../img/marker-black.png';
import blueMarker from '../../img/marker-blue.png';
// import skyMarker from '../../img/marker-sky.png';
// import grayMarker from '../../img/marker-gray.png';

// Uso esta classe para facilitar o controle do marcador no mapa
export default class Marker {
  constructor(place) {
    // Recebe um lugar como parametro e o vincula à esta instancia
    // de marcador.
    this.place = place;
    this.place.marker = this;

    // Cria o marcador
    this.marker_obj = new google.maps.Marker({
      icon: Marker.getDefaultIcon(),
      title: place.name,
      position: place.position
    });

    // Prepara a função de callback para o evento de click
    this.onClick = this.onClick.bind(this);

    // Função para processar o evento de click,
    // é atribuida externamente.
    this.handleClick = null;

    // Registra a função de callback para os eventos de click no marcador
    this.marker_obj.addListener('click', this.onClick);
  }

  // Recebe a função a ser usada para processar o evento de click
  setClickListener(f) {
    this.handleClick = f;
  }

  // Callback para os eventos de click
  onClick() {
    // Verifica se existe a função para processar o click e a invoca
    if(this.handleClick) {
      this.handleClick(this);
    }
  }

  // Obtém o icone padrão do marcador
  static getDefaultIcon() {
    return {
      url: redMarker,
      scaledSize: new google.maps.Size(48, 48)
    };
  }

  // Obtém o icone que indica qual marcador está selecionado
  static getSelectedIcon() {
    return {
      url: blueMarker,
      scaledSize: new google.maps.Size(48, 48)
    };
  }

  setSelected() {
    // this.marker_obj.setAnimation(google.maps.Animation.BOUNCE);
    this.marker_obj.setIcon(Marker.getSelectedIcon());
  }

  setUnselected() {
    // this.marker_obj.setAnimation(null);
    this.marker_obj.setIcon(Marker.getDefaultIcon());
  }

  // Esconde o marcador
  hide() {
    this.marker_obj.setMap(null);
  }

  // Mostra o marcador nomapa passado por parametro
  show(map) {
    this.marker_obj.setMap(map ? map.map_obj : null);
  }
}
