// vue.config.js
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  devServer: {
    proxy: "https://behighload.azurewebsites.net",
  },
});
