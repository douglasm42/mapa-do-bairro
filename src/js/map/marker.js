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

  doBounce() {
    if(window.bouncing !== this) {
      if(window.bouncing) {
        window.bouncing.marker_obj.setAnimation(null);
      }
      window.bouncing = this;
      this.marker_obj.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  bounce(b) {
    const currentAnimation = this.marker_obj.getAnimation();
    if (b && currentAnimation != google.maps.Animation.BOUNCE) {
      this.marker_obj.setAnimation(google.maps.Animation.BOUNCE);
      window.marker = this;
    } else if (!b && currentAnimation != null){
      this.marker_obj.setAnimation(null);
    }
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