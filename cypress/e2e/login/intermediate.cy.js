

describe("intermediate level challenge", () => {
    beforeEach(()=>{
        cy.visit("https://lucasnapolit.github.io/anita-basin/")
        cy.contains("Intermediate").click()
    })

    it("challenge 4 dynamic content loading",()=>{
        cy.get("#loadContent").click()
        cy.get(".spinner").should("be.visible")
        cy.wait(4000)
        cy.get("#dynamicContent").should("be.visible")
        .and("contain.text","Dynamic Content Loaded!This content was loaded after a 2-second delay to simulate an AJAX call")

        })
   })

    
    describe("challenge 5", () => {
         beforeEach(()=>{
        cy.visit("https://lucasnapolit.github.io/anita-basin/")
        cy.contains("Intermediate").click()
         })



         it("tc_0 modal happy path",()=>{
         cy.get("#openModal").click()  
         cy.wait(2000)
         cy.get("#modalInput").type("tuvieja")
         cy.get("#modalSubmit").click()  
         cy.get("#modalAlert").should("contain.text","tuvieja")
      })
        it("tc_02 modal should open and close ",()=>{
            cy.get("#openModal").click()
            cy.wait(2000) 
            cy.get(".modal-content").should("be.visible")
            cy.get("#closeModal").click() 
            cy.get(".modal-content").should("not.be.visible")

        })



    })