function Weather(){
}

Weather.prototype.getWeather = function() {
  console.log("Hi! I'm a weather object.");
}

exports.weatherModule = Weather;
