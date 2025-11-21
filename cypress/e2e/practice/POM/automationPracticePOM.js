

module.exports = {

    elements: {
        username: "#username",
        password: "#password",
        loginButton: "#loginBtn",
        errorMessage: "#loginAlert"
    },

    userNameType(username) {
        cy.get(this.elements.username).type(username)
    },

    passwordType(password) {
        cy.get(this.elements.password).type(password)
    }

} 

