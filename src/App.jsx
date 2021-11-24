/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";

const App = () => {
  const [geolocation, setGeoLocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setGeoLocation(position.coords);

      const latitude = geolocation.latitude;
      const longitude = geolocation.longitude;
    });
  }, []);

  return (
    <div data-cy="weather-display">
      <div data-cy="temp">17</div>
      <div data-cy="location">Virum</div>
    </div>
  );
};

export default App;
