describe ('Test App', () => {

    it ('launches', () => {
      cy.visit ('/');
    });


    it ('renders home message', () => {
      cy.visit ('/');
      cy.get('[data-cy="welcome_message"]').should('contain', 'The easiest way to shop with your family and roomates!');
    });

    it ('doesnt show sign in button in original load', ()=>{
      cy.visit('/');
      cy.get('[data-cy="sign_in_message"]').should('not.be.visible')
    })

    it('shows sign in button after burger press', ()=>{
      cy.visit('/');
      cy.get('[data-cy="burger"]').click()
      cy.get('[data-cy="sign_in_message"]').should('be.visible')
    })
  });