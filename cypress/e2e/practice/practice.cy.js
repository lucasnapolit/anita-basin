describe("todos app - practice", () => {
    beforeEach(() => {
        cy.visit("https://example.cypress.io/todo")
    })

    it("displays two items by default",()=>{
        cy.get(".todo-list li").should("have.length",2)
    

    })
    it("new items can be added",()=>{
        
        cy.get('.new-todo').type("cortar el pasto {enter}") 
        cy.get(".todo-list li").should("have.length",3)
        cy.get(".todo-list li").last().should("have.text","cortar el pasto")
        cy.get(".todo-count").should("have.text","3 items left" )
    })
    it("items can be deleted",()=>{
        cy.get('.todo-list li').last().find('.destroy').invoke('show').click()
        cy.get(".todo-list li").should("have.length",1)
    })
        it("items can be checked",()=>{
          cy.get('.todo-list li').first().find('input[type="checkbox"]').check()  
          cy.get('.todo-list li').first().should('have.class','completed')
        })
    it("items can be unchecked",()=>{
        cy.get('.todo-list li').first().find('input[type="checkbox"]').check()  
        cy.get('.todo-list li').first().should('have.class','completed')
        cy.get('.todo-list li').first().find('input[type="checkbox"]').uncheck()  
        cy.get('.todo-list li').first().should('not.have.class','completed')
      })


      it("active filter works",()=>{
        cy.get('.todo-list li').first().find('input[type="checkbox"]').check()
        cy.get("a[href='#/active']").click()
        cy.get(".todo-list li").should("have.length",1)

      })
      it("completed filter works",()=>{
        cy.get('.todo-list li').first().find('input[type="checkbox"]').check()
        cy.get("a[href='#/completed']").click()
        cy.get(".todo-list li").should("have.length",1)

      })

    })