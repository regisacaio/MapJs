/*
MapJs was developed by Raphael Amorim 

GitHub Project -> http://github.com/raphamorim/mapjs

Notes: MapJs with variously problems
Be Cool and add "ROADMAP", "SATELLITE", "HYBRID", and "TERRAIN" options
*/
  function include(file_path){
      var head = document.getElementsByTagName('head')[0];
      var j = document.createElement("script"); 
      j.type = "text/javascript"; 
      j.src = file_path; 
      head.appendChild(j);
  }

  window.google = window.google || {};
  google.maps = google.maps || {};
  (function() {
    
    function getScript(src) {
      document.write('<' + 'script src="' + src + '"' +
                     ' type="text/javascript"><' + '/script>');
    }
    
    var modules = google.maps.modules = {};
    google.maps.__gjsload__ = function(name, text) {
      modules[name] = text;
    };
    
    google.maps.Load = function(apiLoad) {
      delete google.maps.Load;
      apiLoad([0.009999999776482582,[[["http://mt0.googleapis.com/vt?lyrs=m@231000000\u0026src=api\u0026hl=pt-BR\u0026","http://mt1.googleapis.com/vt?lyrs=m@231000000\u0026src=api\u0026hl=pt-BR\u0026"],null,null,null,null,"m@231000000"],[["http://khm0.googleapis.com/kh?v=137\u0026hl=pt-BR\u0026","http://khm1.googleapis.com/kh?v=137\u0026hl=pt-BR\u0026"],null,null,null,1,"137"],[["http://mt0.googleapis.com/vt?lyrs=h@231000000\u0026src=api\u0026hl=pt-BR\u0026","http://mt1.googleapis.com/vt?lyrs=h@231000000\u0026src=api\u0026hl=pt-BR\u0026"],null,null,null,null,"h@231000000"],[["http://mt0.googleapis.com/vt?lyrs=t@131,r@231000000\u0026src=api\u0026hl=pt-BR\u0026","http://mt1.googleapis.com/vt?lyrs=t@131,r@231000000\u0026src=api\u0026hl=pt-BR\u0026"],null,null,null,null,"t@131,r@231000000"],null,null,[["http://cbk0.googleapis.com/cbk?","http://cbk1.googleapis.com/cbk?"]],[["http://khm0.googleapis.com/kh?v=81\u0026hl=pt-BR\u0026","http://khm1.googleapis.com/kh?v=81\u0026hl=pt-BR\u0026"],null,null,null,null,"81"],[["http://mt0.googleapis.com/mapslt?hl=pt-BR\u0026","http://mt1.googleapis.com/mapslt?hl=pt-BR\u0026"]],[["http://mt0.googleapis.com/mapslt/ft?hl=pt-BR\u0026","http://mt1.googleapis.com/mapslt/ft?hl=pt-BR\u0026"]],[["http://mt0.googleapis.com/vt?hl=pt-BR\u0026","http://mt1.googleapis.com/vt?hl=pt-BR\u0026"]],[["http://mt0.googleapis.com/mapslt/loom?hl=pt-BR\u0026","http://mt1.googleapis.com/mapslt/loom?hl=pt-BR\u0026"]],[["https://mts0.googleapis.com/mapslt?hl=pt-BR\u0026","https://mts1.googleapis.com/mapslt?hl=pt-BR\u0026"]],[["https://mts0.googleapis.com/mapslt/ft?hl=pt-BR\u0026","https://mts1.googleapis.com/mapslt/ft?hl=pt-BR\u0026"]]],["pt-BR","US",null,0,null,null,"http://maps.gstatic.com/mapfiles/","http://csi.gstatic.com","https://maps.googleapis.com","http://maps.googleapis.com"],["http://maps.gstatic.com/intl/pt_br/mapfiles/api-3/14/3","3.14.3"],[2853384449],1,null,null,null,null,1,"",null,null,0,"http://khm.googleapis.com/mz?v=137\u0026",null,"https://earthbuilder.googleapis.com","https://earthbuilder.googleapis.com",null,"http://mt.googleapis.com/vt/icon",[["http://mt0.googleapis.com/vt","http://mt1.googleapis.com/vt"],["https://mts0.googleapis.com/vt","https://mts1.googleapis.com/vt"],[null,[[0,"m",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],0],[null,[[0,"m",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[47],[37,[["smartmaps"]]]]],3],[null,[[0,"h",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],0],[null,[[0,"h",231000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[50],[37,[["smartmaps"]]]]],3],[null,[[4,"t",131],[0,"r",131000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],0],[null,[[4,"t",131],[0,"r",131000000]],[null,"pt-BR","US",null,18,null,null,null,null,null,null,[[5],[37,[["smartmaps"]]]]],3],[null,null,[null,"pt-BR","US",null,18],0],[null,null,[null,"pt-BR","US",null,18],3],[null,null,[null,"pt-BR","US",null,18],6],[null,null,[null,"pt-BR","US",null,18],0]]], loadScriptTime);
    };
    var loadScriptTime = (new Date).getTime();
    getScript("http://maps.gstatic.com/intl/pt_br/mapfiles/api-3/14/3/main.js");
  })();

  var Map = new map();
  var sizeH, sizeW, itemElement;

  function success(position) {
    var s = document.querySelector('#status');

    if (s.className == 'success') {
        return;
    }

    var bar = document.querySelector('#bar');
    bar.innerHTML = "Location Found!";

    s.innerHTML = "You was located!";
    
    s.className = 'success';

    var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = sizeH;
        mapcanvas.style.width = sizeW;

    document.querySelector('article').appendChild(mapcanvas);

    var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var myOptions = {
        zoom: 15,
        center: latlng,
        mapTypeControl: false,
        navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
    var marker = new google.maps.Marker({
        position: latlng,
        map: map,
        title:"You are here!"
    });

  }

  function error(msg) {
      alert("Fail with MapJs...");
  }

  function setLL(position){
      var latlng = position.coords.latitude + " | " + position.coords.longitude;
      var element = document.querySelector(itemElement);
      element.innerHTML = String(latlng);
  }

  function animaDefault(location){
      var mapcanvas = document.createElement('div');
      mapcanvas.id = 'maptheater';

      mapcanvasStyle = mapcanvas.style;

      mapcanvasStyle.height = '0%';
      mapcanvasStyle.width = '0%';
      mapcanvasStyle.position = 'fixed';
      mapcanvasStyle.zIndex = '999';
      mapcanvasStyle.left = '0';
      mapcanvasStyle.top = '0';
      mapcanvasStyle.overflow = 'hidden';
      mapcanvasStyle.background = "url('http://raphamorim.com/images/debut_dark.png')";
      mapcanvasStyle.color = '#000';

      document.querySelector('body').appendChild(mapcanvas);   
      
      var width = 0, height = 0;
      var animacao = setInterval(function animar(){
                  
      mapcanvasStyle.width = width + '%';
      mapcanvasStyle.height = height + '%';    

        if(width >= 100){
             height++;
               if(height >= 105){
                    clearInterval(animacao);
                  }
          }else{
              width = width + 2;
          }
    }, 3);


      document.querySelector('#maptheater').style.opacity = '1';

      mapcanvas.innerHTML = "<div style='position:relative; margin-top:40px;' align='center'><div id='mapblock'></div></div>";


  }


  function map(){ //MapClass

      //GET MAP
      this.getMap = function(item, mapWidth, mapHeight) {
            if (navigator.geolocation) {
                alert("Searching Location...");

                sizeW = mapWidth;
                sizeH = mapHeight;

                if(mapWidth == null){
                  sizeW = "500px";
                }
                if(mapHeight == null){
                  sizeH = "200px";
                }                

                var element = document.querySelector(item);
                element.innerHTML = "<h3 id='bar'>Loading...</h3><section><article><p><span id='status'>Por favor aguarde enquanto nós tentamos localizar você...</span></p></article></section></div>";
              
              navigator.geolocation.getCurrentPosition(success, error);

            } else {
                error('Your browser does not support <b style="color:#333;">Geolocation</b>!');
            }
      }

      //GET LOCATION
      this.getLocation = function(item){
          if (navigator.geolocation) {
            alert("Searching Location...");
            navigator.geolocation.getCurrentPosition(setLL, error);
            itemElement = item;
          } else {
            showError("Your browser does not support Geolocation!");
          }
      }

      //SET MAP
      this.createMap = function(item, latitude, longitude, mapWidth, mapHeight){
          if (navigator.geolocation) {
                alert("Creating Map...");

                sizeW = mapWidth;
                sizeH = mapHeight;

                if(mapWidth == null){
                  sizeW = "500px";
                }
                if(mapHeight == null){
                  sizeH = "200px";
                }                

                var element = document.querySelector(item);
                element.innerHTML = "<h3 id='bar'>Creating map...</h3><section><article><p><span id='status'></span></p></article></section></div>";                    

                var s = document.querySelector('#status');

                if (s.className == 'success') {
                    return;
                }

                var bar = document.querySelector('#bar');
                bar.innerHTML = "Location Found!";

                s.innerHTML = "You was located!";
                
                s.className = 'success';

                var latlng = new google.maps.LatLng(latitude, longitude);

                var mapcanvas = document.createElement('div');
                mapcanvas.id = 'mapcanvas';
                mapcanvas.style.height = sizeH;
                mapcanvas.style.width = sizeW;
                
                document.querySelector('article').appendChild(mapcanvas);

                var myOptions = {
                    zoom: 15,
                    center: latlng,
                    mapTypeControl: false,
                    navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                };
            
                var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);

                var marker = new google.maps.Marker({
                    position: latlng,
                    map: map,
                    title:"You are here!"
                });

          } else {
                error('Your browser does not support <b style="color:#333;">Geolocation</b>!');
          }
      }

      this.show = function(location, animation){

          include("js/MapLibrary.js");

          document.writeln(brasil);

          switch(animation){

          case 'default':    
              animaDefault(location);
              break;

          default:
              animaDefault(location);
              break;
          }

      }




  }
