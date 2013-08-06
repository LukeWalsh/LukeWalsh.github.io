function plotGoogleMapOnPageLoad() {
	var mapOptions = {
  	zoom: 7, //use this value to adjust the zoom level higher number = closer zoom
    center: new google.maps.LatLng(0, 0), //the initial position of the map is 0, 0
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  google.maps.event.addListenerOnce(map, 'tilesloaded', addMarkers);

}

function addMarker(lat, lon) {
	var latLng = new google.maps.LatLng( lat, lon);
	var marker = new google.maps.Marker({
      position: latLng,
      map: map,
      icon: 'img/black_dot.png' //this could be changed to any png
	});
}
