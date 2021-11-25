/* eslint-disable no-undef */
describe("weather info for user's location", () => {
  beforeEach(()=> {
    cy.intercept('https://api.opencagedata.com/geocode/v1/json/**', {fixture: 'location.json' })
    cy.intercept('https://api.openweathermap.org/data/2.5/**', {fixture: 'weather.json' })
  })

  it("is expected to be displayed on the intial render", () => {
    cy.visit("http://localhost:3000", {
      onBeforeload(window) {
        const stubLocation = {
          coords: { latitiude: 57.7308, longitute: 11.9834 },

   
        };
        cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(
          (callback) => {
            return callback(stubLocation);
          }
        );
      },
    });

    cy.get("[data-cy=weather-display]").within(() => {
      cy.get("[data-cy=temp]").should("contain", "5.53");
      cy.get("[data-cy=location]").should("contain", "Virum");
      //cy.get("[data-cy=wind_speed]").should("contain", "3.09");
    });
  });
});

// degress symbol to add

