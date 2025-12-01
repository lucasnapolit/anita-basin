const rActions = require("../../PagesObjectModel/Beginer")
const cActions = require("../../PagesObjectModel/beginer2")
const loginData = require("../../fixtures/loginData.json")
const dActions = require("../../PagesObjectModel/beginer3")

describe("page automation practice", () => {
    
    beforeEach(() => {
        cy.visit("https://lucasnapolit.github.io/anita-basin/")
     
    });

    it("TC_01 Login Happy Path", () => {
        rActions.userNameType(loginData.validUser.username)
        rActions.passwordType(loginData.validUser.password)
        rActions.SubmitEvent()
        rActions.successMessageAssert()
        
       


    })

    it("TC_02 Checking elements Happy path",()=>{
        cActions.checkOption1()
        cActions.checkOption2()
        cActions.checkOption3()
        cActions.uncheckOption1()
        cActions.uncheckOption2()
        cActions.uncheckOption3()
        cActions.checkOption1()
        cActions.choose1()  
        cActions.choose2()
        cActions.choose3()
        cActions.submitChoices()
        cActions.choiceMessageAssert()
    })
    it("TC_03 Checking elements negative path",()=>{
        cActions.checkOption1()
        cActions.checkOption2()
        cActions.checkOption3()
        cActions.uncheckOption1()
        cActions.uncheckOption2()
        cActions.uncheckOption3()
        cActions.choose1()  
        cActions.choose2()
        cActions.choose3()
        cActions.submitChoices()
        cActions.errorchoiceMessageAssert()
    })

    it("TC_04 DROPDOWN challenge ", () => {
        dActions.selectUnitedStates()
        dActions.UsaAsertion()

        dActions.selectUnitedKingdom()
        dActions.ukAsertion()

        dActions.selectCanada()
        dActions.canadaAsertion()
        
        dActions.selectAustralia()
        dActions.australiaAsertion()

    })

    })