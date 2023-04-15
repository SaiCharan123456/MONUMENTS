let latitude = 22.36982847061714 
let longitude = 79.82533186258425



mapboxgl.accessToken ="pk.eyJ1Ijoic2FpLWNoYXJhbiIsImEiOiJjbGdnbWNmOTYwY2lhM2JsYm82a205NmpuIn0.Q361sXcnc4Eu9H6xlGXuIg"

var map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 4.5
})

var img1 = document.querySelector("#amber")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var markerl = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

var img2 = document.querySelector("#gateway")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker2 = new mapboxgl.Marker({
    element: img2
})
.setLngLat([ 72.63993019560318,19.350415512036765])
.addTo(map);

var img3 = document.querySelector("#gate")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker3 = new mapboxgl.Marker({
    element: img3
})
.setLngLat([77.23074536206072, 28.61509494755117])
.addTo(map);

var img4 = document.querySelector("#lotus")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker4 = new mapboxgl.Marker({
    element: img4
})
.setLngLat([ 77.25940575056825,28.553774692266956])
.addTo(map);

var img5 = document.querySelector("#victoria")

// Create a Amber Palace, Jaipur Marker and add it to the map.
var marker5 = new mapboxgl.Marker({
    element: img5
})
.setLngLat([89.73650565534977, 23.47745570778101])
.addTo(map);


map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);