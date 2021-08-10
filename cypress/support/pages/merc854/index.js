const el = require('./elements').ELEMENTS
const phone = '53999100219';

class merc854 {
  
    accessRegisterAD() {
        cy.visit('/profile/new');
    }

    inputPhoneAD() {
        cy.get(el.inputPhone).type(phone);
        cy.get(el.proceedButton).click();
    }

    getCode() {
    let code = null
    
    cy.task('queryDatabase', `select code from phone_validate where phone = ${phone} order by created_at desc limit 1;`)
        .then((recordSet) => {
            
            let data = recordSet
            //cy.log(data[0].code)
            code = data[0].code
            code.replace(/\D+/g, '');
            //codes = JSON.stringify(codes)
            //cy.log(codes)
            //cy.wrap(codigo)
            return code
            })     
            cy.wait(3000) 
            cy.log(code)
            //return code;
    }

    forward1minute() {
        //cy.clock();
        cy.wait(62000)
       // cy.tick(20000)
        
    }

    getCodeAndType() {
        //cy.log(cy.getCode(phone));
        let code = this.getCode()
        //cy.log(code)
        cy.get(el.inputCode).type(code , { delay: 100 });
        
        //`${this.getCodeVerify()}`
    }

    resendCode() {
        cy.get(el.resendCodeButton).click()
           // .should('be', 'visible')
    }

    

    submitCode() {
        cy.get(el.sendMessageButton).click();
    }
}

export default new merc854();