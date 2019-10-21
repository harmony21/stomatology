var map;

DG.then(function () {
    map = DG.map('map', {
        center: [48.48, 135.08],
        zoom: 15,
        scrollWheelZoom: false
    });

    var myIcon = DG.icon({
        iconUrl: '../temp/map-icon.png',
        iconSize: [46, 58],
        iconAnchor: [0, 0],
    });

    marker = DG.marker([48.48, 135.08], {icon: myIcon}).addTo(map);
});