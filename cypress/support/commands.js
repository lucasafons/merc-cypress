// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: '/app/chat_android/login',
      body: {
          number: "53999100004",
          password: "123456"
      }
  }).then((loginResponse) => {
      cy.visit('/', {
          onBeforeLoad: (win) => {
              win.localStorage.setItem('fm_laravel_session', loginResponse.body.token)
          }
      });
    })
})
Cypress.Commands.add("isNotActionable", function(selector) {
  cy.get(selector).click()
  cy.once('fail', (err) => {
    expect(err.message).to.include('cy.click() failed because this element');
    expect(err.message).to.include('is being covered by another element');

  });
}) 

