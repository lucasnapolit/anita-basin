const selectors = require('../selectors/challenge2')

class checksSection {
    checkOption1(){
        cy.get(selectors.option1).check()
    }
    checkOption2(){
        cy.get(selectors.option2).check()
    }
    checkOption3(){
        cy.get(selectors.option3).check()
    }   

    uncheckOption1(){
        cy.get(selectors.option1).uncheck()
    }
    uncheckOption2(){
        cy.get(selectors.option2).uncheck()
    }
    uncheckOption3(){
        cy.get(selectors.option3).uncheck()
    }   

    choose1(){
        cy.get(selectors.choise1).check()
    }
    choose2(){
        cy.get(selectors.choise2).check()
    }       
    choose3(){
        cy.get(selectors.choise3).check()
    }
    submitChoices(){
        cy.get(selectors.submitBtn).click()
    }
    choiceMessageAssert(){
        cy.get(selectors.choiseAlert).should("have.text","Selected 1 checkboxes and radio: c")
    }
    errorchoiceMessageAssert(){
        cy.get(selectors.choiseAlert).should("have.text","Please select at least one checkbox and one radio button")
    }
}

module.exports = new checksSection();