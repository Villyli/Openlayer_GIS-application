	  import Map from 'ol/Map.js';
    import View from 'ol/View.js';
    import {OSM} from 'ol/source.js';  
    import {Polygon} from 'ol/geom.js';
    import {Tile as TileLayer} from 'ol/layer.js';
    import Overlay from 'ol/Overlay.js';
	  import {fromLonLat} from 'ol/proj.js';
	  
	  var layer1 = new TileLayer({
        source: new OSM()
      });
	  
	  var center1 = fromLonLat([104.0775,30.65666667]);
	  
	  
	  var view = new View({
        center: center1,
        zoom: 15
      });
	  
	  var map = new Map({
        layers: [layer1],
        target: 'map',
        view: view
      });
	  	  
	  var pos1 = fromLonLat([104.0836111, 30.66305556]);

      var hospital = new Overlay({
        position: pos1,
        element: document.getElementById('hospital')
      });
      map.addOverlay(hospital);
	  
	  // hospital label
      var hospitaltext = new Overlay({
        position: pos1,
        element: document.getElementById('hospitaltext')
      });
      map.addOverlay(hospitaltext);
	  
	  var pos2 = fromLonLat([104.0952778, 30.67388889]);
	  
	  var school = new Overlay({
		element: document.getElementById('school')
	  });
	  school.setPosition(pos2);
      map.addOverlay(school);
	  
	  var schooltext = new Overlay({
        position: pos2,
        element: document.getElementById('schooltext')
      });
      map.addOverlay(schooltext);
	  
	  var pos3 = fromLonLat([104.0961111, 30.65638889]);
	  
	  var myposition = new Overlay({
		element: document.getElementById('myposition')
	  });
	  myposition.setPosition(pos3);
      map.addOverlay(myposition);	  
	  var mypositiontext = new Overlay({
        position: pos3,
        element: document.getElementById('mypositiontext')
      });
      map.addOverlay(mypositiontext);
	
	  var polygon = new Polygon([[pos1,pos2,pos3,pos1]]);
        view.fit(polygon, {padding: [100, 100, 100, 100], constrainResolution: false});

	  
	  
	  
	  

	  
	  
	  