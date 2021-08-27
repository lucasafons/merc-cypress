/// <reference types="cypress" />

import merc from '../support/pages/merc1017'

describe('Limite de 10 requisições para código sms', () => {
  it('Ao atingir 10 envio incorretos de código, deverá ser retornado 429', () => {
    //Arrange
    merc.accessRegisterAD();
    //Act
    merc.inputPhoneAD();
    //Assert
    merc.inputInvalidCodeUntil429();
    merc.checkButtonIsDisabled();
  });
});