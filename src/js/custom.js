var miMapa;
var directionsService = null;
var santiago={
    lat: -33.4488897,
    lng: -70.6692655
}

var ciudades = {
    'Arica':{
            ciudad: 'Arica',
            coordenadas: [-18.4782534,-70.31259879999999
            ],
            distancia: 2059
        },
    'Iquique': {
        ciudad: 'Iquique',
        coordenadas: [-20.2307033,-70.1356692
        ],
        distancia: 1789
    },
    'Antofagasta': {
        ciudad: 'Antofagasta',
        coordenadas: [-23.6509279,-70.39750219999996
        ],
        distancia: 1368
    },
    'Calama': {
        ciudad: 'Calama',
        coordenadas: [-22.4543923,-68.92938190000001
        ],
        distancia: 1567
    },
    'La Serana': {
        ciudad: 'La Serana',
        coordenadas: [-29.9026691,-71.25193739999997
        ],
        distancia: 470
    },
    'Valparaíso': {
        ciudad: 'Valparaíso',
        coordenadas: [-33.047238, -71.61268849999999
        ],
        distancia: 116
    },
    'Santiago': {
        ciudad: 'Santiago',
        coordenadas: [-33.4488897,-70.6692655
        ],
        distancia: 0
    },
    'Rancagua': {
        ciudad: 'Rancagua',
        coordenadas: [-34.17013240000001, -70.7406259
        ],
        distancia: 84
    },
    'Talca': {
        ciudad: 'Talca',
        coordenadas: [-35.4232444, -71.64848039999998
        ],
        distancia: 257
    },
    'Concepción': {
        ciudad: 'Concepción',
        coordenadas: [-36.8201352, -73.0443904
        ],
        distancia: 500
    },
    'Temuco': {
        ciudad: 'Temuco',
        coordenadas: [-38.7359018, -72.59037390000003
        ],
        distancia: 690
    },
    'Valdivia': {
        ciudad: 'Valdivia',
        coordenadas: [-39.8173788, -73.24253329999999
        ],
        distancia: 848
    },
    'Puerto Montt': {
        ciudad: 'Puerto Montt',
        coordenadas: [-41.468917, -72.9411364
        ],
        distancia: 1032
    },
    'Coyhaique': {
        ciudad: 'Coyhaique',
        coordenadas: [-45.5712254, -72.068265
        ],
        distancia: 1888
    },
    'Punta Arenas': {
        ciudad: 'Punta Arenas',
        coordenadas: [-53.1638329, -70.91706829999998
        ],
        distancia: 3004
    }
};

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
    miMapa.setZoom(8);
};
var miubicacion='no cargo la ubicacion';
var currentMarker = null;
var directionsDisplay = null;
var directionsService = null;
/*var geocoder = new google.maps.Geocoder;
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    geocodeLatLng(geocoder, currentMarker.position,'direccion');*/



function centrarMapa(position){
    miMapa.setZoom(16);
    miMapa.setCenter(new google.maps.LatLng( -33.4488897,-70.6692655));
    currentMarker = new google.maps.Marker({
        position: new google.maps.LatLng( -33.4488897,-70.6692655),
        map: miMapa,
        title:"Aqui estoy!!!",
    });
};

function calcRoute(start, end) { //lat, long
    var bounds = new google.maps.LatLngBounds();
    //bounds.extend(start);
   // bounds.extend(end);
    miMapa.fitBounds(bounds);
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };

    directionsService.route(request, function (response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
            directionsDisplay.setMap(miMapa);
        } else {
            alert("Direction Requested failed: " + status);
        }
    });
}

// function geocodeLatLng(geocoder, position, id) {

//   var latlng = position;
//   geocoder.geocode({'location': latlng}, function(results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       if (results[0]) {
//         $('#'+id).html(results[0].formatted_address);
//         miubicacion= results[0].formatted_address;
//       } else {
//         window.alert('No results found');
//       }
//     } else {
//       window.alert('Geocoder failed due to: ' + status);
//     }
//   });
// }

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

function buscar(){
    var origen = $('#origen').val();
    var destino = $('#destino').val();

    var origen_coor = ciudades[origen].coordenadas;
    var destino_coor = ciudades[destino].coordenadas;

    if(directionsDisplay != null) {
        directionsDisplay.setMap(null);
        directionsDisplay = null;
    }

    var geocoder = new google.maps.Geocoder;
    directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
        //geocodeLatLng(geocoder, currentMarker.position,'direccion');
    $('#vehiculos').css("display","block");
$('#compartir').css("display","block");
    calcRoute({
               "lat" : origen_coor[0],
               "lng" : origen_coor[1]
            },
            {
               "lat" : destino_coor[0],
               "lng" : destino_coor[1]
            });
}



var costoCombustible= 673;
var dolar= "$"; 
var distanciaTOTAL= 2;// FALTA HALLAR
var precioTOTAL=0;


$('#radio1').click(function(){
    var consumoKL= 12;
    $('#precioMo').html(dolar+673*consumoKL*distanciaTOTAL);
})
$('#radio2').click(function(){
    var consumoKL= 21;
     $('#precioAu').html(dolar+673*consumoKL*distanciaTOTAL);
})
$('#radio3').click(function(){
    var consumoKL= 7;
    $('#precioMi').html(dolar+673*consumoKL*distanciaTOTAL);
})
$('#radio4').click(function(){
    var consumoKL= 6;
    $('#precioCa').html(dolar+673*consumoKL*distanciaTOTAL);
})


$('#compartir').click(function(){
    var valor= $('#cantPasajeros').val();
    console.log(valor);
    isvalid= true;
    if(valor=="")
    {
        sweetAlert("Oops...", "Llena la cantidad de pasajeros", "error");
        isvalid= false;
    }
    if(valor<=0)
    {
        sweetAlert("Oops...", "Ingresa un valor positivo", "error");
        isvalid= false;
    }
    else
    {
        if (isvalid) {
            swal({
                title: "CarroComp!",
                text: "Costo por persona",
                text: precioTOTAL,
                type: "success"
});
        }
    }
})