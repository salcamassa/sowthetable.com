module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800},
    },{
      plugin: require('../node_modules/gatsby-remark-autolink-headers/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-typography/gatsby-browser.js'),
      options: {"plugins":[],"pathToConfigModule":"src/utils/typography"},
    },{
      plugin: require('../node_modules/gatsby-plugin-lunr/gatsby-browser.js'),
      options: {"plugins":[],"languages":[{"name":"en"}],"fields":[{"name":"title","store":true,"attributes":{"boost":20}},{"name":"description","store":true,"attributes":{"boost":5}},{"name":"content"},{"name":"url","store":true},{"name":"date","store":true}],"resolvers":{"MarkdownRemark":{}},"filename":"search_index.json"},
    }]
