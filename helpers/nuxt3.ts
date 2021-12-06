import { readFileSync } from 'fs'

/** Function that helps to override module variables with local ones. It does not merge them, so make sure to copy the variables file */
function variableOverride(pathToVariables = 'assets/scss/_variables.scss') {
  return {
    scss: {
      webpackImporter: true,
      sassOptions: {
        importer(url: string) {
          if (url === 'variables') {
            const scss: string = readFileSync(pathToVariables, 'utf8')
            return { contents: scss }
          }
          return null
        }
      }
    }
  }
}

export default variableOverride
