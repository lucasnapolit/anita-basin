describe("testiando diferentes entornos",()=>{     
                  
    it("visitando entornos segun config file y usando variables de entorno",()=>{
        cy.viewport(1280,720)   
        cy.visit("")
        cy.get("input[type='text']").eq(0).type(Cypress.env("username"),{force:true})
    })
})