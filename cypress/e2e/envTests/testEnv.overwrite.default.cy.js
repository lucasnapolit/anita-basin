describe("testiando diferentes entornos",()=>{     
                  
    it("sobreEscribiendo  entorno usando un archivo env.json",()=>{
        cy.viewport(1280,720)   
        cy.visit(Cypress.env("prod_url"))
        cy.get("input[type='text']").eq(0).type(Cypress.env("username"),{force:true})
    })
})