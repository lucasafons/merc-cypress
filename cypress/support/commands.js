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

Cypress.Commands.add("getCode", async (phone) => {
  var codes = null
  
  await cy.task('queryDB', `select code from phone_validate where phone = ${phone} order by created_at desc limit 1;`)
      .then(function(recordSet) {  
        var data = recordSet
        //cy.wrap(recordSet).as('data');
          codes = data[0].code
          codes.replace(/\D+/g, '');
          
          cy.log(codes)
          return codes
          //cy.wrap(codes).as('codigo') 
          //codes = JSON.stringify(codes)
          //cy.log('-' + codes)
      }) 
      // cy.get('@data').then((data) => {
      //   codes = data[0].code
      //   cy.log(codes)
      //   return data
      // });
      
      
      // cy.wait(3000) 
      // cy.log(codes)
      // return codes
      // cy.log(a); 
      // return "1234"
      // cy.get('@codigo').then((codigo) => {
      //   return codigo
      // });
})

