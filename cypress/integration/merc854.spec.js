/// <reference types="cypress" />

import merc from '../support/pages/merc854'
import Routes from '../support/routes'

describe('Testando invalidez de código após reenvio', () => {
  before(() => {
    Routes.init()
  });
    
    it('Em caso de reenvio de código, o primeiro deverá se tornar inválido', () => {
        // Arrange
        merc.accessRegisterAD()
        merc.inputPhoneAD();
        // Act
        merc.forward1minute()
        merc.getCodeAndType();
        merc.resendCode();
        merc.submitInvalidCode();
        // Assert
        merc.deleteCode();
        merc.getCodeAndType();
        merc.submitValidCode();
    });
});