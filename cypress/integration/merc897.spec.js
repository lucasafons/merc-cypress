/// <reference types="cypress" />

import merc from '../support/pages/merc897'

describe('MERCURIO-897', () => {
  context('Modal de limite de serviços favoritos', () => {
    it('Favoritando o 4o serviço e mostrando modal', () => {
      // Arrange
      merc.accessHomeAD()
      merc.enterProfileEdit()

      // Act
      merc.stepsLocationData()
      merc.stepsPersonalData()
      merc.stepsProfessionalData()
      merc.stepsValuesData3fav()
      // Assert
      merc.checkLimitOfFavsModal()
      merc.confirmProfileEdit()
    });
  })

})