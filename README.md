# SCSS system

This is an scss starter for new project with most common components and classes with living documentation

## Usage

To install the package, run `npm install @thisisdeploy/scaffold-css`. Handle it with the tool of your choice, like webpack, to compile it to `.css`, preferably minimizing it to drop the comments (for example with [cssnano](https://www.npmjs.com/package/cssnano-webpack-plugin)). You can also just download the files directly from GitHub and drop them into your project, modifying as needed.

### Overriding variables in sass loader

Make sure to import your variables file before you import those CSS files

## Documentation

The documentation for this CSS system can be viewed at <https://css-system-deploy.netlify.com/>

## Contributing

### Syntax

The `.scss` host their own documentation in comments. Comments are formatted as `md` files. To create a showcase in the style guide, build your comment like this:

~~~scss
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
