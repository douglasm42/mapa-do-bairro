export default class Marker {
  constructor(title, position) {
    this.marker_obj = new google.maps.Marker({
      //icon: image,
      title: title,
      position: position
    });
  }

  setMap(map) {
    this.marker_obj.setMap(map);
  }
}