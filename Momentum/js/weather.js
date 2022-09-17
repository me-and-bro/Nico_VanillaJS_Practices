function onGeoSuccess(position){
    const curLat = position.coords.latitude;
    const curLng = position.coords.longitude;
    alert("You lived in " + curLat + " " + curLng);
}

function onGeoError(){
    alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);