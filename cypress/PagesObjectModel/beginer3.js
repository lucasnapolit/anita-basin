const selectors = require('../selectors/challenge3')
class dropdownSection {

    selectUnitedStates(){
        cy.get(selectors.dropdownMenu).select(1)
        cy.get(selectors.submitBtn).click()
   
    }
    UsaAsertion(){
             cy.get(selectors.confirmationMsg).should("have.text","You selected: usa")
    }

     selectUnitedKingdom(){
        cy.get(selectors.dropdownMenu).select("uk")
        cy.get(selectors.submitBtn).click()
    }
    ukAsertion(){
        cy.get(selectors.confirmationMsg).should("have.text","You selected: uk")
    }

    selectCanada(){
        cy.get(selectors.dropdownMenu).select(3)
        cy.get(selectors.submitBtn).click()
    }
    canadaAsertion(){
        cy.get(selectors.confirmationMsg).should("have.text","You selected: canada")
    }
    selectAustralia(){
        cy.get(selectors.dropdownMenu).select(4)
        cy.get(selectors.submitBtn).click()
    }
    australiaAsertion(){
        cy.get(selectors.confirmationMsg).should("have.text","You selected: australia")
    }
   
}

module.exports = new dropdownSection();