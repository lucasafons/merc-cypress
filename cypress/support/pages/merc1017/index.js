const el = require('./elements').ELEMENTS
const faker = require('faker')
const phone = faker.datatype.number(100000000000);
// faker.random.number(10000)
import Routes from '../../routes'

class merc1017 {

  accessRegisterAD() {
    cy.visit('/profile/new');
    cy.get('#agree-18').click()
  }

  inputPhoneAD() {
    cy.get(el.inputPhone).type(phone);
    cy.get(el.proceedButton).click();
  }

  inputInvalidCodeUntil429() {
    cy.get(el.inputCode).type(faker.datatype.number(10000), { delay: 100 }) 
    cy.get(el.sendMessageButton).click();
    cy.wait(`@${Routes.as.postTooManyAtt}`).then(({response}) => {
      expect(response.statusCode).to.eq(429)
    })
  
  }

  checkButtonIsDisabled(){
    cy.get(el.sendMessageButton)
      .should('have.class', 'disabled');
  }
}


export default new merc1017();