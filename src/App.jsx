import React from "react";

const app = () => {
  navigator.geolocation.getCurrentPosition(async (position) => {});
  return (
    <div data-cy="weather-display">
      <div data-cy="temp">17</div>
      <div data-cy="location">Virum</div>
    </div>
  );
};

export default app;
