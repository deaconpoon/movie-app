/// <reference types="cypress" />

describe("Routing", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("go to home page", () => {
    cy.get('[data-testId="logo"]').click();
    cy.url().should("include", "/");
  });

  it("go to movie route from header's movie link", () => {
    cy.get('[data-testId="header-movie-link"]').click();
    cy.url().should("include", "movies");
  });
  it("go to series route from header's series link", () => {
    cy.get('[data-testId="header-series-link"]').click();
    cy.url().should("include", "series");
  });
  it("go to movie route from home page", () => {
    cy.get('[data-testId="home-movies-card"]').click();
    cy.url().should("include", "movies");
  });
  it("go to series route from home page", () => {
    cy.get('[data-testId="home-series-card"]').click();
    cy.url().should("include", "series");
  });
  it("go to 404 and route back to home page", () => {
    cy.visit("/404");
    cy.get('[data-testId="error-home-link"]').click();
    cy.url().should("include", "/");
  });
});
