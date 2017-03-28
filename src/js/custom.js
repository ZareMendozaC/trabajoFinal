var miMapa;
var directionsService = null;
var santiago={
    lat: -33.4488897,
    lng: -70.6692655
}
var opcionesMapa = {
    enableHighAccuracy: true
}

var destino = null;

function initMap() {
    miMapa = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: santiago.lat,
            lng: santiago.lng},
            zoom: 10
        });
};
var miubicacion='no cargo la ubicacion';
var currentMarker = null;
var directionsDisplay = null;


function centrarMapa(position){
    miMapa.setZoom(16);
    miMapa.setCenter(new google.maps.LatLng( -33.4488897,-70.6692655));
    currentMarker = new google.maps.Marker({
        position: new google.maps.LatLng( -33.4488897,-70.6692655),
        map: miMapa,
        title:"Aqui estoy!!!",
    });
/*
    var geocoder = new google.maps.Geocoder;
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    geocodeLatLng(geocoder, currentMarker.position,'direccion');
    */
};

function init(){
    if(navigator.geolocation){
        console.log('Navigation supported');
        navigator.geolocation.getCurrentPosition(centrarMapa);
    }
    else
    {
        console.log('Navigation NOT supported');
    }
}