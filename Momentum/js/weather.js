function onGeoSuccess(position) {

    const curLat = position.coords.latitude;
    const curLng = position.coords.longitude;

    // alert("You lived in " + curLat + " " + curLng);
    const myLocUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${curLat}&lon=${curLng}&appid=${MY_KEY.WEATHER_API_KEY}&units=metric`;

    fetch(myLocUrl).then((response) => response.json()).then(
        (data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");

            weather.innerText = `현재 날씨 : ${data.weather[0].main} / ${data.main.temp}℃`;
            city.innerText = `지역 : ${data.sys.country} / ${data.name}`;
        }
    );
}

function onGeoError() {
    alert("Error");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError); 