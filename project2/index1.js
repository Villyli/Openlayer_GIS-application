var layer1 = new ol.layer.Tile.TileLayer({
        source: new ol.source.OSM()
      });
	  
	  var center1 = ol.proj.fromLonLat([104.0775,30.65666667]);  
	  
	  var view = new ol.View({
        center: center1,
        zoom: 15
      });
	  
	  var map = new ol.Map({
        layers: [layer1,vectorLayer],
        target: 'map',
        view: view
      });