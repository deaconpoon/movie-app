/// <reference types="cypress" />

describe("Movies and series list", async () => {
  it("Render movies list correctly", () => {
    cy.visit("/movies");
    cy.get('[data-testid="movie-card"]').should("be.visible");
    cy.get('[data-testid="movie-card-image"]').should("be.visible");
    cy.get('[data-testid="movie-card-title"]').should("be.visible");
  });
  it("Render series list correctly", () => {
    cy.visit("/series");
    cy.get('[data-testid="movie-card"]').should("be.visible");
    cy.get('[data-testid="movie-card-image"]').should("be.visible");
    cy.get('[data-testid="movie-card-title"]').should("be.visible");
  });
  it("Render movie modal correctly", () => {
    cy.visit("/movies");
    cy.get('[data-testid="movie-card"]').first().click();
    cy.get('[data-testid="movie-modal"]').should("be.visible");
    cy.get('[data-testid="movie-modal-image"]').should("be.visible");
    cy.get('[data-testid="movie-modal-title"]').should("be.visible");
    cy.get('[data-testid="movie-modal-releaseDate"]').should("be.visible");
    cy.get('[data-testid="movie-modal-funFact"]').should("be.visible");
    cy.get('[data-testid="movie-modal-funFact"]')
      .first()
      .should("not.contain", "Sorry, fun fact is not availabe");
    cy.get('[data-testid="movie-modal-programType"]').should("be.visible");
    cy.get('[data-testid="movie-modal-description"]').should("be.visible");
    cy.get('[data-testid="movie-modal-button-close"]').should("be.visible");
    cy.get('[data-testid="movie-modal-button-close"]').click();
    cy.get('[data-testid="movie-modal"]').should("not.exist");
  });
});
