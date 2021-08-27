class Routes {
  
  as = {
    postResendCode: 'POSTresendCode',
    postIsValidCode: 'POSTisValidCode',
    postTooManyAtt: 'POSTtooManyAtt'
  }
  
  init() {
    cy.intercept('POST', '**/phone/validate').as(this.as.postResendCode);
    cy.intercept('POST', '**/phone/validate/code').as(this.as.postIsValidCode);
    cy.intercept('**/phone/validate/code', {
      statusCode: 429,
      body: 'Too many attempts',
    }).as(this.as.postTooManyAtt)
  }
}

export default new Routes();
