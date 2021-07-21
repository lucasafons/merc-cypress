/// <reference types="cypress" />

import merc from '../support/pages/merc734'

describe('MERCURIO-734', () => {
    context('Acessando seção serviços na Edição de perfil', () => {
        it('Limitar 3 favoritos', () => {
            // Arrange
            merc.accessHomeAD()
            merc.enterProfileEdit()

            // Act
            merc.stepsLocationData()
            merc.stepsPersonalData()
            merc.stepsProfessionalData()
            merc.stepsValuesData()

            // Assert
            merc.confirmProfileEdit
        });
    })

})