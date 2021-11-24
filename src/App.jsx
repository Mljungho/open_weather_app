import React, { useState, useEffect } from "react";

const App = () => {
  const [geolocation, setGeolocation] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      setGeolLocation({ geolocation: position.coords });
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
