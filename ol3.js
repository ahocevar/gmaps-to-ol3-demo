var exampleLoc = ol.proj.transform(
    [131.044922, -25.363882], 'EPSG:4326', 'EPSG:3857');

var map = new ol.Map({
  target: 'map',
  renderer: ol.RendererHint.CANVAS,
  view: new ol.View2D({
    zoom: 3,
    center: exampleLoc
  }),
  layers: [new ol.layer.Tile({source: new ol.source.MapQuestOSM()})]
});

map.addOverlay(new ol.Overlay({
  element: $('<div>').addClass('circle'),
  position: exampleLoc
}));
function setCircleSize() {
  var size = 2 * 400000 / map.getView().getResolution() + 'px';
  $('.circle').width(size).height(size);
}
setCircleSize();
map.getView().on('change:resolution', setCircleSize);

map.addOverlay(new ol.Overlay({
  position: exampleLoc,
  element: $('<div>').addClass('marker')
      .tooltip({title: 'Hello, world!', trigger: 'click'})
}));

var exampleKml = new ol.layer.Vector({
  source: new ol.source.Vector({
    url: 'data/example.kml',
    parser: new ol.parser.KML()
  })
});
map.addLayer(exampleKml);
