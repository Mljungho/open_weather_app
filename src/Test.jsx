import React, { Component } from "react";
import axios from "axios";


class Test extends Component {
  state = {
    geolocation: {},
  };

  componentDidmount() {
    navigator.geolocation.getCurrentPosition(async(position) => {
      let { latitude, longitude } = position.coords;
      this.setState({ geolocation: position.coords });

      let locationResponse = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=b294071f86eb4faf999e3e553b2cb241`
      );

      let weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=b48b627fe35ad88025944c93d440d1e8`
      );

      let weatherInfo = {
          city: locationResponse.data.results[0].components.postal_city,
          temp: weatherResponse.data.current.temp
      }
      this.setState({ location: weatherInfo })
    });
  }
  // render for HTML bits - I think
  render() {
    return (
    <div data-cy="weather-display">
        <div data-cy="temp">17</div>
        <div data-cy="location">Virum</div>
    </div>
    )}
}

export default Test;
