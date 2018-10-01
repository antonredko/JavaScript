var humidity, pressure, temperature, windSpeed, weatherSummary, object, cels;

function element(id) {
    return document.getElementById(id);
}

window.onload = function () {
    humidity = element('current-humidity');
    pressure = element('current-pressure');
    temperature = element('current-temperature');
    windSpeed = element('current-wind-speed');
};

function getWeather() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var long = position.coords.longitude,
                lat = position.coords.latitude;
            showWeather(long, lat);
        })
    } else {
        alert('Could not get current weather');
    }
};

function showWeather(long, lat) {
    var url = `https://api.darksky.net/forecast/f672ff13193bfcc40427a678ebfdbc71/${lat}, ${long}` + `?format=jsonp&callback=displayWeather`;
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    displayWeather(object);
};

function displayWeather(object) {
    humidity.innerHTML = 'Humidity: ' + object.currently.humidity + ' %';
    pressure.innerHTML = 'Pressure: ' + object.currently.pressure + ' m.o.m.';
  	temperature.innerHTML = 'Temperature: ' + object.currently.temperature + ' &#176;F';
    windSpeed.innerHTML = 'Wind Speed: ' + object.currently.windSpeed + ' m/s';
};

