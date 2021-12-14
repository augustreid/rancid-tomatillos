describe('visit genre page', () => {
    beforeEach(() => {
  
        cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {fixture:'movies.json'})
        .visit('http://localhost:3000/')
        .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/613504', {fixture:'genreMovie1.json'})
        .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/605499', {fixture:'genreMovie2.json'})
        .intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies/550231', {fixture:'genreMovie3.json'})
    })

    it('Should confirm that header is still present', () => {
        cy.contains('Rancid Tomatillos') 
    });

    it('Should confirm that page exists', () => {
        cy.get('Nav')
        .get('a')
        .contains('Romance')
        .click()
        .visit('http://localhost:3000/Romance')
    });

    it('Should be able to go back to main when user clicks the back to main button', () => {
        cy.get('button')
        .click()
        .visit('http://localhost:3000/')
    });

  });
