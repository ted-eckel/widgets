var React = require('react');


var Weather = React.createClass({
  getInitialState: function() {
    return {weather: 0, location: 0};
  },
  componentDidMount: function() {
    var lat;
    var lon;

    var that = this;

    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;

      that.getWeather(lat, lon);
    });
  },
  getWeather: function(lat, lon) {
    var that = this;
    var apiKey = '645c5d39c7603f17e23fcaffcea1a3c1';
    var weatherRequest = new XMLHttpRequest ();
    weatherRequest.open('GET',
      'http://api.openweathermap.org/data/2.5/weather?lat=' +
      lat + '&lon=' + lon + '&APPID=' + apiKey, true);

    weatherRequest.onload = function (e) {
      if (weatherRequest.readyState === 4) {
        if (weatherRequest.status === 200) {
          var weatherResponse = JSON.parse(weatherRequest.response);
          var weatherDescription = weatherResponse.weather[0].description;
          var weatherTempKelvin = weatherResponse.main.temp;
          var weatherTempF = Math.round((weatherTempKelvin * (9/5) - 459.67));

          that.setWeatherLocation(weatherDescription,
                                  weatherTempF,
                                  weatherResponse);
        }
      }
    };
    weatherRequest.send();
  },
  setWeatherLocation: function(description, temp, response) {
    this.setState({weather: description + ' Temp: ' + temp});
    this.setState({location: response.name});
  },
  componentWillUnmount: function() {
    this.setState({weather: 0});
    this.setState({location: 0});
  },
  render: function() {
      return <div>
        <p>Weather: {this.state.weather}</p>
        <p>Location: {this.state.location}</p>
        </div>;
  }
});

module.exports = Weather;
