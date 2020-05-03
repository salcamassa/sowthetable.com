// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("./../src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-recipes-js": () => import("./../src/pages/recipes.js" /* webpackChunkName: "component---src-pages-recipes-js" */),
  "component---src-templates-blog-post-js": () => import("./../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-tags-js": () => import("./../src/templates/tags.js" /* webpackChunkName: "component---src-templates-tags-js" */)
}

