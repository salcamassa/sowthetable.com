const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-blog-post-js": hot(preferDefault(require("/Users/salcamassa/Projects/sowthetable.com/src/templates/blog-post.js"))),
  "component---src-templates-tags-js": hot(preferDefault(require("/Users/salcamassa/Projects/sowthetable.com/src/templates/tags.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/salcamassa/Projects/sowthetable.com/.cache/dev-404-page.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/salcamassa/Projects/sowthetable.com/src/pages/about.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/salcamassa/Projects/sowthetable.com/src/pages/index.js"))),
  "component---src-pages-recipes-js": hot(preferDefault(require("/Users/salcamassa/Projects/sowthetable.com/src/pages/recipes.js")))
}

