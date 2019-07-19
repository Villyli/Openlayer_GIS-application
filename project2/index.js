  
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
	  	  
	  var pos1 = ol.proj.fromLonLat([104.0836111, 30.66305556]);

      var hospital = new ol.Overlay({
        position: pos1,
        element: document.getElementById('hospital')
      });
      map.addOverlay(hospital);
	  
	  // hospital label
      var hospitaltext = new ol.Overlay({
        position: pos1,
        element: document.getElementById('hospitaltext')
      });
      map.addOverlay(hospitaltext);
	  
	  var pos2 = ol.proj.fromLonLat([104.0952778, 30.67388889]);
	  
	  var school = new ol.Overlay({
		element: document.getElementById('school')
	  });
	  school.setPosition(pos2);
      map.addOverlay(school);
	  
	  var schooltext = new ol.Overlay({
        position: pos2,
        element: document.getElementById('schooltext')
      });
      map.addOverlay(schooltext);
	  
	  var pos3 = ol.proj.fromLonLat([104.0961111, 30.65638889]);
	  
	  var myposition = new ol.Overlay({
		element: document.getElementById('myposition')
	  });
	  myposition.setPosition(pos3);
      map.addOverlay(myposition);	  
	  var mypositiontext = new ol.Overlay({
        position: pos3,
        element: document.getElementById('mypositiontext')
      });
      map.addOverlay(mypositiontext);
	
	  var polygon = new ol.geom.Polygon([[pos1,pos2,pos3,pos1]]);
        view.fit(polygon, {padding: [100, 100, 100, 100], constrainResolution: false});

	  
	  
	  
	  

	  
	  
	  