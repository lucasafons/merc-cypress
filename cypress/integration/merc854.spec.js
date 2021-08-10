/// <reference types="cypress" />

import merc from '../support/pages/merc854'

describe('Testando invalidez de código após reenvio', () => {
  
    
    it('Em caso de reenvio de código, o primeiro deverá se tornar inválido', () => {
        // Arrange
        merc.accessRegisterAD()
        merc.inputPhoneAD();
        // Act
        //merc.forward1minute()
        merc.getCodeAndType();
        //merc.resendCode();
        //merc.submitCode();
        
        // Assert
        
        //merc.getCodeAndType();
        //merc.submitCode();
    });
});