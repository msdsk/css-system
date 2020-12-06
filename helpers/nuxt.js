/*
Call this module from nuxt.config.js build.extend to be able to override the variables
*/

const fs = require('fs')

module.exports = function variableOverride(loaders, pathToVariables='assets/scss/_variables.scss') {
  loaders.scss.webpackImporter = true
  loaders.scss.sassOptions = {
    importer(url) {
      if (url === 'variables') {
        const scss = fs.readFileSync(pathToVariables, 'utf8', console.error)
        return { contents: scss }
      }
      return null
    }
  }
}
