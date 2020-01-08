# SCSS system

This is an scss starter for new project with most common components and classes with living documentation

## Usage

You can download it and drop the files right into your project, modify them as needed. Handle it with the tool of your choice, like webpack, to compile it to `.css`, preferably minimizing it to drop th comments (for example with [cssnano](https://www.npmjs.com/package/cssnano-webpack-plugin)).

You can also use it as a `node_modules` dependency. For that you need to:

1. From your GitHub account [generate a personal access token](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line). It needs to have in its permissions: [read:packages, write:packages, delete:packages, repo](https://help.github.com/en/github/managing-packages-with-github-packages/about-github-packages#about-tokens).
2. Add an environmental variable to your system (for example in `~/.zshrc`) `GITHUB_TOKEN="the_generated_token"`. Do the same in your production/testing environment.
3. Create at the root of your project `.npmrc` file with following content: ```//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
registry=https://npm.pkg.github.com/thisisdeploy```
4. Run `npm install -S @thisisdeploy/css-system`

Then handle it as appropriate within your front end workflow to process into `.css` files and consume them.

## Contributing

### Syntax

The `.scss` host their own documentation in comments. Comments are formatted as `md` files. To create a showcase in the style guide, build your comment like this:

~~~
/*
# Some title

Explanation for documentation

```example

<div>I'm an example html</div>
<script>
// it can also have inline js
alert('It\'s working!')
</script>

```
*/
~~~~

Please, make sure that comments are in line with your changes. For images you can use `<img src="/image.jpg">`.

### Updating the style guide

If you add changes, please update the package and the style guide. To do so:

1. Go to netlify, find the css documentation project. In `Settings > Build and Deploy` you will find `Build hooks` with `Update dependency` hook. Copy that url.
2. Add a new environmental variable in your system `CSS_PUBLISH_URL="the url"`
3. Bump the `version` field in `package.json`
4. Run `npm publish`
