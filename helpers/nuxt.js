/*
Call this module from nuxt.config.js build.extend to be able to override the variables
*/

module.exports = function(loaders, pathToVariables='assets/scss/_variables.scss') {
  loaders.scss.webpackImporter = true
  loaders.scss.sassOptions = {
    importer(url) {
      if (url === 'variables') {
        const scss = fs.readFileSync(path.join(__dirname, pathToVariables), 'utf8', console.error)
        return { contents: scss }
      }
      return null
    }
  }
}
