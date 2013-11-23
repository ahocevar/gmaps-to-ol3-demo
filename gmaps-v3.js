var exampleLoc = new google.maps.LatLng(-25.363882,131.044922);

var map = new google.maps.Map(document.getElementById('map'),{
  zoom: 4,
  center: exampleLoc,
  disableDefaultUI: true,
  zoomControl: true,
  zoomControlOptions: {
    style: google.maps.ZoomControlStyle.SMALL
  },
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow({
    content: 'Hello, world!'
});

var marker = new google.maps.Marker({
    position: exampleLoc,
    map: map
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});

var circle = new google.maps.Circle({
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 3,
  fillColor: '#FF0000',
  fillOpacity: 0.1,
  map: map,
  center: exampleLoc,
  radius: 400000
});

var exampleKml = new google.maps.KmlLayer({
  url: 'http://ahocevar.github.io/gmaps-to-ol3-demo/data/example.kml',
  clickable: false
});
exampleKml.setMap(map);

