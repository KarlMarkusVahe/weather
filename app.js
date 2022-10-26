document.addEventListener('DOMContentLoaded', cityweather)

function weatherdatafetch(city) {
    var key = "a315ce8c5b7b9fd848b10c1a8a61c162";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
        .then(function(resp) {
        return resp.json()
    })
        .then(function(data) {
        console.log(data);
        drawWeather(data);
    })
        .catch(function() {

    });
}
function cityweather(e) {
    weatherdatafetch('Tallinn'); //toronto
}

function drawWeather(data) {
    var celcius = Math.round(parseFloat(data.main.temp)-273.15);
    var description = data.weather[0].description;
    document.querySelector('#description').innerHTML = description;
    document.querySelector('#temp').innerHTML = celcius + '&deg;';
    document.querySelector('#location').innerHTML = data.name;
}