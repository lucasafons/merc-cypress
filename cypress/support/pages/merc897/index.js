const el = require('./elements').ELEMENTS;

class merc897 {
  accessHomeAD() {
    cy.login();
  }

  enterProfileEdit() {
    cy.get(el.menuButton).click()
    cy.get(el.myProfileButton)
      .should('contain', 'Meu Perfil')
      .click()
    cy.get(el.ProfileEditButton)
      .click()
      .should('contain', 'Editar Perfil')
  }

  stepsLocationData() {
    cy.get(el.districtCombo).type('Centro{enter}', { delay: 150 });
    cy.get(el.referenceInput).type('teste');
    cy.get(el.searchDistrictCombo).type('Centro{enter}', { delay: 150 });

    cy.get(el.continueButton).click();
  }

  stepsPersonalData() {
    cy.get(el.continueButton).click();
  }

  stepsProfessionalData() {
    cy.get(el.clientsButton).click()
      .should('have.class', 'active')
      .should('contain', '1 cliente')
    cy.get(el.continueButton).click();
  }

  stepsValuesData3fav() {
    cy.get(el.companionDoesLabel).click();
    cy.get(el.favCompanionDoesService).click()
    cy.get(el.companionDoesDescription)
      .find('p:last-child')
      .should(($p) => {
        expect($p).to.be.visible
        expect($p).to.contain('Você pode favoritar até 3 serviços.')
      })

    cy.get(el.mouthKissDoesLabel).click()
    cy.get(el.favMouthKissDoesService).click()
    cy.get(el.mouthKissDoesDescription)
      .find('p:last-child')
      .should(($p) => {
        expect($p).to.be.visible
        expect($p).to.contain('Você pode favoritar até 3 serviços.')
      })

    cy.get(el.bondageReceiveLabel).click()
    cy.get(el.favBondageReceiveService).click()
    cy.get(el.bondageReceiveDescription)
      .find('p:last-child')
      .should(($p) => {
        expect($p).to.be.visible
        expect($p).to.contain('Você pode favoritar até 3 serviços.')
      })


  }

  checkLimitOfFavsModal() {
    cy.get(el.dominationDoesLabel).click();

    cy.get(el.favDominationDoesService).contains('Favoritar').click({ force: true })
    cy.get('#modal-alert > .modal-dialog > .modal-content')
      .should('contain', 'Você somente pode favoritar até 3 serviços distintos.')
    cy.get('.modal-footer > .btn-secondary-base')
      .should('contain', "ENTENDIDO")
      .click()
  }

  confirmProfileEdit() {
    cy.get(el.finishButton).click()
    cy.get(el.sucessModalLabel)
      .should('contain', 'Sucesso ao editar perfil!');
  }
}

export default new merc897();