class Routes {
  
  as = {
    postResendCode: 'POSTresendCode',
    postIsValidCode: 'POSTisValidCode',
  }
  
  init() {
    cy.intercept('POST', '**/phone/validate').as(this.as.postResendCode);
    cy.intercept('POST', '**/phone/validate/code').as(this.as.postIsValidCode);
  }
}

export default new Routes();
