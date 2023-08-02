//Test suit case
describe('Search', () => {
  const searchTerm = 'cypress.io';

  beforeEach(() => {
    //Query searchTerm
    cy.intercept('GET', `**?q=${searchTerm}**`).as('getSearchResults');

    cy.visit('https://duckduckgo.com/');

    //Serachbox to write
    cy.get('form input[type="text"]').as('searchField').should('be.visible');
  });

  //Test 1
  it('Types and hits ENTER', () => {
    cy.get('@searchField').type(`${searchTerm}{enter}`);

    cy.wait('@getSearchResults');

    //Counts of search result - command.js
    cy.assertTenResultsPlusMoreResultsButton();
  });

  //Test 2
  it('Types and clicks the magnifying glass button', () => {
    cy.get('@searchField').type(searchTerm);

    cy.get('button[type="submit"]').should('be.visible').click();

    cy.wait('@getSearchResults');

    //Counts of search result - command.js
    cy.assertTenResultsPlusMoreResultsButton();
  });

  //Test 3
  it('Types and submits the form directly', () => {
    cy.get('@searchField').type(searchTerm);

    cy.get('form').submit();

    cy.wait('@getSearchResults');

    //Counts of search result - command.js
    cy.assertTenResultsPlusMoreResultsButton();
  });
});
