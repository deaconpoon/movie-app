/// <reference types="cypress" />

describe("Routing", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("go to home page", () => {
    cy.get('[data-testid="logo"]').click();
    cy.url().should("include", "/");
  });

  it("go to movie route from header's movie link", () => {
    cy.get('[data-testid="header-movie-link"]').click();
    cy.url().should("include", "movies");
  });
  it("go to series route from header's series link", () => {
    cy.get('[data-testid="header-series-link"]').click();
    cy.url().should("include", "series");
  });
  it("go to movie route from home page", () => {
    cy.get('[data-testid="home-movies-card"]').click();
    cy.url().should("include", "movies");
  });
  it("go to series route from home page", () => {
    cy.get('[data-testid="home-series-card"]').click();
    cy.url().should("include", "series");
  });
  it("go to 404 and route back to home page", () => {
    cy.visit("/404");
    cy.get('[data-testid="error-home-link"]').click();
    cy.url().should("include", "/");
  });
});
