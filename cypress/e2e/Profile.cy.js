describe('Login to Profile Integration Testing', () => {
  beforeEach('accesses site, logs in, navigates to profile', () => {
    cy.clearAllCookies();
    cy.visit('http://localhost:3000/auth/login');
    const email = 'user@user.com';
    const password = 'user';
    cy.get('[data-test=email-input]').type(`${email}`);
    cy.get('[data-test=password-input]').type(`${password}{enter}`);
    cy.url().should('eq', 'http://localhost:3000/');
    cy.get('[data-cy=profile-nav]').click();
    cy.url().should('eq', 'http://localhost:3000/profile');
  });

  it('Shows all fields with correct data', () => {
    cy.get('[data-test=username]').should('have.text', 'Username: user@user.com');
    cy.get('[data-test=leaderboardName]').should('have.text', 'Leaderboard Name: IrishFan24');
    cy.get('[data-test=description]').should('have.text', 'Description: Go Irish!!');
  });

  it('Allows edits', () =>{
    cy.get('[data-cy=profile-edit]').click();
    cy.get('[data-test=leaderboard-name-input]').should('have.value', 'IrishFan24');
    cy.get('[data-test=description-input]').should('have.value', 'Go Irish!!');
    cy.get('[data-test=leaderboard-name-input]').type('1')
    cy.get('[data-test=description-input]').type('!');
    cy.get('[data-test=leaderboard-name-input]').should('have.value', 'IrishFan241');
    cy.get('[data-test=description-input]').should('have.value', 'Go Irish!!!');
    cy.get('[data-cy=profile-submit]').click();
    cy.get('[data-test=username]').should('have.text', 'Username: user@user.com');
    cy.get('[data-test=leaderboardName]').should('have.text', 'Leaderboard Name: IrishFan241');
    cy.get('[data-test=description]').should('have.text', 'Description: Go Irish!!!');
  });

  after('Clean up', () => {
    cy.get('[data-cy=profile-edit]').click();
    cy.get('[data-test=leaderboard-name-input]').type('{backspace}');
    cy.get('[data-test=description-input]').type('{backspace}');
    cy.get('[data-cy=profile-submit]').click();
  })
});