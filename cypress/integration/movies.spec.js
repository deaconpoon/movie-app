/// <reference types="cypress" />

describe("Movies and series list", () => {
  it("Render movies list correctly", () => {
    cy.visit("/movies");
    cy.get('[data-testId="movie-card"]').should("be.visible");
    cy.get('[data-testId="movie-card-image"]').should("be.visible");
    cy.get('[data-testId="movie-card-title"]').should("be.visible");
  });
  it("Render series list correctly", () => {
    cy.visit("/series");
    cy.get('[data-testId="movie-card"]').should("be.visible");
    cy.get('[data-testId="movie-card-image"]').should("be.visible");
    cy.get('[data-testId="movie-card-title"]').should("be.visible");
  });
  it("Render movie modal correctly", () => {
    cy.visit("/movies");
    cy.get('[data-testId="movie-card"]').first().click();
    cy.get('[data-testId="movie-modal"]').should("be.visible");
    cy.get('[data-testId="movie-modal-image"]').should("be.visible");
    cy.get('[data-testId="movie-modal-title"]').should("be.visible");
    cy.get('[data-testId="movie-modal-releaseDate"]').should("be.visible");
    cy.get('[data-testId="movie-modal-funFact"]').should("be.visible");
    cy.get('[data-testId="movie-modal-programType"]').should("be.visible");
    cy.get('[data-testId="movie-modal-description"]').should("be.visible");
    cy.get('[data-testId="movie-modal-button-close"]').should("be.visible");
    cy.get('[data-testId="movie-modal-button-close"]').click();
    cy.get('[data-testId="movie-modal"]').should("not.exist");
  });
});
