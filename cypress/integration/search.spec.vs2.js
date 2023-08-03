//Test suit case
describe('Search', () => {
  beforeEach(() => {
    //Acessing duckduck go searching
    cy.visit('https://duckduckgo.com/');

    //Searchbox to write
    cy.get('form input[type="text"]').as('searchField').should('be.visible');
  });

  it('Searches by typing and selecting the first option from the list', () => {
    cy.get('@searchField').type('cypress.io{downarrow}{enter}', { delay: 500 });

    //Counts of search result - command.js
    cy.assertTenResultsPlusMoreResultsButton();
  });

  it('Searches by typing and selecting the second option from the list', () => {
    cy.get('@searchField').type('cypress.io{downarrow}{downarrow}{enter}', { delay: 500});

    //Counts of search result - command.js
    cy.assertTenResultsPlusMoreResultsButton();
  });


  it('Searches by typing and selecting the third option from the list', () => {
    cy.get('@searchField').type('cypress.io{downarrow}{downarrow}{downarrow}{enter}', { delay: 500});

    //Counts of search result - command.js
    cy.assertTenResultsPlusMoreResultsButton();
  });
});
