//This stores the TOTAL time from the previous page
var totalTime =localStorage.getItem("timeToPass");
mapboxgl.accessToken = 'pk.eyJ1Ijoidml6ZTMiLCJhIjoiY2tubHhlZXg2MGx5eTJxcGRmYWN1bnhuaCJ9.hw-AyeAElNogvAARTHWlXQ';
  
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
})

function successLocation(position){
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav)


var directions = new MapboxDirections({
  accessToken: mapboxgl.accessToken
});

map.addControl(directions, 'top-left');

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        })
    );
}
