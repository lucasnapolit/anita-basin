const selectors = require('../selectors/loginSelectors');

class loginPage {



    userNameType(username) {
        cy.get(selectors.username).type(username)
    }

    passwordType(password) {
        cy.get(selectors.password).type(password)
    }

    SubmitEvent(){
        cy.get(selectors.loginButton).click()
    }

    successMessageAssert(){
        cy.get(selectors.statusMessage).should('have.text','Login successful!')
        }
}

module.exports = new loginPage();
