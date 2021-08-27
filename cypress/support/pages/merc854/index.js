const el = require('./elements').ELEMENTS
const phone = '53999100234';

import Routes from '../../routes'

class merc854 {

  accessRegisterAD() {
    cy.visit('/profile/new');
    cy.get('#agree-18').click()
  }

  inputPhoneAD() {
    cy.get(el.inputPhone).type(phone);
    cy.get(el.proceedButton).click();
  }

  forward1minute() {
    cy.wait(62000)
  }

  getCodeAndType() {
    let code;
    cy.task('queryDatabase', `select code
                              from phone_validate
                              where phone = ${phone}
                              order by created_at desc limit 1;`)
      .then((recordSet) => {
        code = recordSet[0].code;
        code.replace(/\D+/g, '');
        cy.get(el.inputCode).type(code, { delay: 100 });
        code = 0;
      });
  }

  resendCode() {
    cy.get(el.resendCodeButton)
      .should('be.visible')
      .click()
    cy.wait(`@${Routes.as.postResendCode}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
  }

  submitInvalidCode() {
    cy.get(el.sendMessageButton).click();
    cy.wait(`@${Routes.as.postIsValidCode}`).then(({ response }) => {
      expect(response.statusCode).to.eq(403)
    })
  }

  submitValidCode() {
    cy.get(el.sendMessageButton).click();
    cy.wait(`@${Routes.as.postIsValidCode}`).then(({ response }) => {
      expect(response.statusCode).to.eq(200)
    })
  }

  deleteCode() {
    cy.get(el.deleteInputCode).type("{backspace}{backspace}{backspace}{backspace}{backspace}");
  }
}

export default new merc854();