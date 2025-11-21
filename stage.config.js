const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.leagueoflegends.com/es-es/champions/briar/",
  },
   env:{
        username:"BriarQueen",
        password:"testpass" 
    }
});
