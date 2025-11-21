
describe("amazon dropdown",()=>{
    it("select one of the dropdown items",()=>{
        cy.visit("https://www.amazon.es/")
        cy.get("#twotabsearchtextbox").type("iphone")
        cy.get(".autocomplete-results-container").find(">div>").contains("iphone 16 pro max").click()
       
    }
)})