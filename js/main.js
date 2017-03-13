$(function () {
  function initMap() {
    var folgaPosition = {
      lat: 50.401452,
      long: 30.376159
    }
    var location = new google.maps.LatLng(folgaPosition.lat, folgaPosition.long);
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: location
      , zoom: 17
      , panControl: false
      , mapTypeId: google.maps.MapTypeId.ROADMAP
      , streetViewControl: false
      , scrollwheel: false
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var markerImage = {
        url: 'img/marker2.gif', // url
        scaledSize: new google.maps.Size(71, 71), // scaled size
        origin: new google.maps.Point(0, 0), // origin
        anchor: new google.maps.Point(25, 60) // anchor
      }
      //            'img/marker.png';
    var marker = new google.maps.Marker({
      position: location
      , map: map
      , optimized: false
      , icon: markerImage
    });
    var contentString = '<div class="info-window">' + '<h3>Fol\'ga Lounge Zone</h3>' + '<div class="info-content">' + '<p>ул. Леси Украинки 6</p>' + '</div>' + '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
      , maxWidth: 400
    });
    marker.addListener('click', function () {
      infowindow.open(map, marker);
    });
  }
  google.maps.event.addDomListener(window, 'load', initMap);
});