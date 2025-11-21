const rActions = require ( "./POM/automationPracticePOM")


describe("page automation practice",()=>{
    beforeEach(()=>{

        cy.visit("https://claude.ai/public/artifacts/6ee2ccc1-2e26-4e77-aee2-6c9976fa860f")
    
        })

        it("TC_01 Login Happy Path",()=>{
            rActions.userNameType("asd")

        })



    })

