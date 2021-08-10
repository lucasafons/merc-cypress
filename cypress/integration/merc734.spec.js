/// <reference types="cypress" />

import merc from '../support/pages/merc734'

describe('MERCURIO-734', () => {
  context('É possivel favoritar no máximo 6 vezes porém apenas 3 serviços distintos', () => {
    it('3 serviços e 3 favoritos', () => {
      // Arrange
      merc.accessHomeAD()
      merc.enterProfileEdit()

      // Act
      merc.stepsLocationData()
      merc.stepsPersonalData()
      merc.stepsProfessionalData()
      merc.stepsValuesData3fav()
    });
    it('3 servicos e 6 favoritos', () => {
      // Arrange
      merc.accessHomeAD()
      merc.enterProfileEdit()

      // Act
      merc.stepsLocationData()
      merc.stepsPersonalData()
      merc.stepsProfessionalData()
      merc.stepsValuesData6fav()

      // Assert
      merc.confirmProfileEdit()
    })
  })

})