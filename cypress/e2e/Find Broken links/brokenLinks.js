
describe("broken links on the page",()=>{
    it("checking for broken links",()=>{
        cy.visit("https://ecommerce-playground.lambdatest.io/")
        let activeLinks = 0
        let inactiveLinks = 0
        cy.get("a").each(($link, index)=>{
            const href = $link.attr("href")
            if(href){
                cy.request({url:href,failOnStatusCode: false}).then((respuesta)=>{
                    if(respuesta.status >=400 )
                        {cy.log(`broken link ${href} index number ${index}`)
                        inactiveLinks++}

                    else{cy.log(`active link ${href} index number ${index}`)
                        activeLinks++}
                     
                })
            }
        }).then(()=>{
            cy.log(`active links are ${activeLinks}`)
            cy.log(`inactive links are ${inactiveLinks}`)
            cy.log(`total links are ${activeLinks + inactiveLinks}`)
        })
    })
}
)  