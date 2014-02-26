var exampleLoc = ol.proj.transform(
    [131.044922, -25.363882], 'EPSG:4326', 'EPSG:3857');

var map = new ol.Map({
  target: 'map',
  renderer: 'canvas',
  view: new ol.View2D({
    projection: 'EPSG:3857',
    zoom: 3,
    center: exampleLoc
  }),
  layers: [
    new ol.layer.Tile({source: new ol.source.MapQuest({layer: 'osm'})})
  ]
});

map.addOverlay(new ol.Overlay({
  position: exampleLoc,
  element: $('<img src="resources/img/marker-blue.png">')
      .css({marginTop: '-200%', marginLeft: '-50%', cursor: 'pointer'})
      .tooltip({title: 'Hello, world!', trigger: 'click'})
}));

map.on('postcompose', function(evt) {
  evt.vectorContext.setFillStrokeStyle(
      new ol.style.Fill({color: 'rgba(255, 0, 0, .1)'}),
      new ol.style.Stroke({color: 'rgba(255, 0, 0, .8)', width: 3}));
  evt.vectorContext.drawCircleGeometry(
      new ol.geom.Circle(exampleLoc, 400000));
});

var exampleKml = new ol.layer.Vector({
  source: new ol.source.KML({
    projection: 'EPSG:3857',
    url: 'data/example.kml'
  })
});
map.addLayer(exampleKml);
