
function initMap() {
    var stylers = [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "saturation": 36
              },
              {
                  "color": "#111419"
              },
              {
                  "lightness": 40
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 17
              },
              {
                  "weight": 1.2
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ecf0f4"
              },
              {
                  "lightness": 20
              }
          ]
      },
      {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              },
              {
                  "lightness": "-4"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#d9dfe8"
              },
              {
                  "lightness": 21
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 17
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 29
              },
              {
                  "weight": 0.2
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 18
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "lightness": 16
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#f9fbff"
              },
              {
                  "lightness": 19
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#e5eaf0"
              },
              {
                  "lightness": 17
              }
          ]
      }
  ]
  

  const myLatLng = {
    lat: 51.5016,
    lng: -0.1049
  };

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng,
    fullscreenControl: false,
    zoomControl: true,
    streetViewControl: true,
    styles: stylers,
  });



const contentString1=
    '<div id="content">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading"><a href="http://valentine-estate.com/offices/1ValentinePlace.html"> 1 Valentine Place </a></h1>' +
    '<div id="bodyContent">' +
    "<p>1 Valentine Place <br> South Bank <br> SE1 8QH <br> London</p>" + 
    "<br>" +
    '<a href="https://www.google.com/maps/place/1+Valentine+Pl,+South+Bank,+London+SE1+8QH/@51.5016158,-0.107136,17z/data=!3m1!4b1!4m5!3m4!1s0x487604a4d768645d:0x8f852506099af7b8!8m2!3d51.5016158!4d-0.1049473" target="_blank"><p> Click here to view in Google Maps </p></a>'
    "</div>" +
    "</div>";

const contentString2=
    '<div id="content">' +
    "</div>" +
    '<a href="http://valentine-estate.com/offices/1BoundaryRow.html"><h1 id="firstHeading" class="firstHeading">1 Boundary Row</h1></a>' +
    '<div id="bodyContent">' +
    "<p>1 Boundary Row <br> South Bank <br> SE1 8GN <br> London</p>" +
    "<br>" +
    '<a href="https://www.google.com/maps/place/1+Boundary+Row,+South+Bank,+London+SE1+8GN/@51.502097,-0.1073097,17z/data=!3m1!4b1!4m5!3m4!1s0x487604b039079415:0x46bb78ecca7875d5!8m2!3d51.502097!4d-0.105121" target="_blank"><p> Click here to view in Google Maps </p></a>'
    "</div>" +
    "</div>";

const contentString3=
    '<div id="content">' +
    "</div>" +
    '<a href="http://valentine-estate.com/offices/8BoundaryRow.html"><h1 id="firstHeading" class="firstHeading">8 Boundary Row</h1></a>' +
    '<div id="bodyContent">' +
    "<p>8 Boundary Row <br> South Bank <br> SE1 8HP <br> London</p>" +
    "<br>" +
    '<a href="https://www.google.com/maps/place/8+Boundary+Row,+South+Bank,+London+SE1+8HP/data=!4m2!3m1!1s0x487604bad4ba47a9:0xf90847b66b53051?sa=X&ved=2ahUKEwiCge-8mZbuAhXSz4UKHTGqAlIQ8gEwAHoECAcQAQ" target="_blank"><p> Click here to view in Google Maps </p></a>'
    "</div>" +
    "</div>";

const contentString4=
    '<div id="content">' +
    "</div>" +
    '<a href="http://valentine-estate.com/offices/90GreatSuffolkStreet.html"><h1 id="firstHeading" class="firstHeading">90 Great Suffolk Street</h1></a>' +
    '<div id="bodyContent">' +
    "<p>90 Great Suffolk Street <br> South Bank <br> SE1 0BE <br> London</p>" +
    "<br>" +
    '<a href="https://www.google.com/maps/place/90+Great+Suffolk+St,+London+SE1+0BE/@51.5018771,-0.1030562,17z/data=!3m1!4b1!4m5!3m4!1s0x487604a5cb58894f:0xec967ebe9d21fef1!8m2!3d51.5018771!4d-0.1008675" target="_blank"><p> Click here to view in Google Maps </p></a>'
    "</div>" +
    "</div>";

  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
  });
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
  });
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
  });
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
  });

  var marker1 = new google.maps.Marker({
    position: {lat: 51.5015951, lng: -0.1048588}, 
    map,
    title: "1 Valentine Place",
    icon: 'http://valentine-estate.com/img/graphics/googleMapsPin.png',
    content: '1 Valentine Place'
  });

  var marker2 = new google.maps.Marker({
    position: {lat: 51.50224390749835, lng: -0.1050995442385235},  
    map,
    title: "1 Boundary Row",
    icon: 'http://valentine-estate.com/img/graphics/googleMapsPin.png',
  });

  var marker3 = new google.maps.Marker({
    position: {lat: 51.502177657817825, lng: -0.10579464575392009}, 
    map,
    title: "8 Boundary Row",
    icon: 'http://valentine-estate.com/img/graphics/googleMapsPin.png',
  });

  var marker4 = new google.maps.Marker({
    position: {lat: 51.501882173128244, lng: -0.10083252487697532},
    map,
    title: "90 Great Suffolk Street",
    icon: 'http://valentine-estate.com/img/graphics/googleMapsPin.png',
  });

  marker1.addListener("click", () => {
    infowindow1.open(map, marker1);
  });
  marker2.addListener("click", () => {
    infowindow2.open(map, marker2);
  });
  marker3.addListener("click", () => {
    infowindow3.open(map, marker3);
  });
  marker4.addListener("click", () => {
    infowindow4.open(map, marker4);
  });

} 

