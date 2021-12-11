describe('Detail page display', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/337401')
    })

    it('Should confirm that header is still present', () => {
        cy.contains('Rancid Tomatillos') 
    });

    it('Should confirm that title, rating, release_date, summary all present', () => {
        cy.contains('Mulan')
        cy.contains('⭐️')
        cy.contains('2020-09-04')
        cy.contains('When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.')
    });

    it('Should be able to go back to main when user clicks the back to main button', () => {
        cy.get('button')
        .click()
        .visit('http://localhost:3000/')
    });

  });
