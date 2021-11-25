import React from "react";
import { render, screen } from "@testing-library/react";

import axios from "axios";
import { openCageResponse } from "../../cypress/fixtures/location.json";
import { openWeatherResponse } from "../../cypress/fixtures/weather.json";

let axiosSpy, getPositionSpy;

describe("App.jsx", () => {
  beforeEach(() => {
    getPositionSpy = jest.SpyOn(App.prototype, "getPosition").mockReturnValue({
      coords: {
        longitude: 11.9834,
        latitude: 57.7308,
      },
    });
    axiosSpy = jest
      .spyOn(axios, "get")
      .mockResolvedValueOnce(openWeatherResponse)
      .mockResolvedValueOnce(openCageResponse);

    render(<App />);
  });

  it("is expected to call for position", () => {
      expect(getPositionSpy).toHaveBeenCalledTimes(1);
  });

  it("is expected to have 2 axios calls", () => {
      expect(axiosSpy).toHaveBennCalledTimes(2);
  });

  it('is expected to render the city name', () => {
      expect(screen.getByText("You are in Gothenburg")).toBeInTheDocument();
  });

  it("is expected to render temperature", () => {
      expect(screen.getByText("Current temperature is 5.53°"))
  })
});
