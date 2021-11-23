/* eslint-disable no-undef */
describe("weather info for user's location", () => {
  it("is expected to be displayed on the intial render", () => {
    cy.visit("http://localhost:3000", {
      onBeforeload(window) {
        const stubLocation = {
          coords: { latitiude: 55.7842, longitute: 12.4518 },
        };
        cy.stub(window.navigator.geolocation, "getCurrentPosition").callsFake(
          (callback) => {
            return callback(stubLocation);
          }
        );
      },
    });

    cy.get("[data-cy=weather-display]").within(() => {
      cy.get("[data-cy=temp]").should("contain", "17");
      cy.get("[data-cy=location]").should("contain", "Virum");
    });
  });
});
// degress symbol to add
