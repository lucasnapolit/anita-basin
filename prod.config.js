const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     baseUrl: "https://www.leagueoflegends.com/es-es/champions/draven/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env:{
        username:"DravenMaster",
        password:"testpass" 
    }
   
  },
});
