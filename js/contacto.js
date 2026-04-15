// Mapa centrado en Málaga
const map = L.map('map').setView([36.7213, -4.4214], 13);

// Mapa OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Ubicación de la tienda 
const tienda = [36.7213, -4.4214];

// Marcador tienda
L.marker(tienda).addTo(map)
    .bindPopup("Urban Art Figures - Nuestra tienda")
    .openPopup();

// Ubicación del usuario
navigator.geolocation.getCurrentPosition(function(pos) {

    const cliente = [
        pos.coords.latitude,
        pos.coords.longitude
    ];

    // Marcador usuario
    L.marker(cliente).addTo(map)
        .bindPopup("Tu ubicación");

    // Linea entre usuario y tienda
    L.polyline([cliente, tienda], {
        color: 'blue'
    }).addTo(map);

    // Ajustar zoom a ambos puntos
    map.fitBounds([cliente, tienda]);

}, function() {
    alert("No se pudo obtener tu ubicación");
})