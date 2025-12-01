describe("tabs handling",()=>{
    it("handling tabs in cypress",()=>{
        cy.visit("https://selectorshub.com/xpath-practice-page/")
        cy.get("a").contains("User Role").invoke("removeAttr","target").click()
    })
})