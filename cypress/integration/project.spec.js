/// <reference types="cypress" />

describe('blog page should work', () => {
  context('1080p res', () => {
    beforeEach(() => {
      cy.viewport(1920, 1080);
    });
  });

  it('should render properly', () => {
    cy.visit('/projects');
    cy.contains('Projects').should('exist');
  });
});
