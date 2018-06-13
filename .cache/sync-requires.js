// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-post-template-js": preferDefault(require("/mnt/c/Users/mbg/Documents/grabeh.net/src/templates/postTemplate.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/mnt/c/Users/mbg/Documents/grabeh.net/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/mnt/c/Users/mbg/Documents/grabeh.net/src/pages/index.js")),
  "component---src-pages-posts-js": preferDefault(require("/mnt/c/Users/mbg/Documents/grabeh.net/src/pages/posts.js"))
}

exports.json = {
  "layout-index.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/layout-index.json"),
  "a-comparison-of-drafting-legal-documents-vs-coding.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/a-comparison-of-drafting-legal-documents-vs-coding.json"),
  "digital-ocean-vps-nginx-express-apps.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/digital-ocean-vps-nginx-express-apps.json"),
  "moving-towards-object-oriented-java-script.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/moving-towards-object-oriented-java-script.json"),
  "online-terms-better-with-notice.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/online-terms-better-with-notice.json"),
  "steps-to-improve-unity-ubuntu-on-chromebook-crouton-for-developer-purposes.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/steps-to-improve-unity-ubuntu-on-chromebook-crouton-for-developer-purposes.json"),
  "setting-up-https-with-express-apps-using-nginx-and-digital-ocean.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/setting-up-https-with-express-apps-using-nginx-and-digital-ocean.json"),
  "refactoring-from-j-query-to-angular-js.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/refactoring-from-j-query-to-angular-js.json"),
  "the-journey-from-curious-outsider-to-beginner.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/the-journey-from-curious-outsider-to-beginner.json"),
  "automated-publishing-on-a-vps-using-draftin-webhooks-and-node-js.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/automated-publishing-on-a-vps-using-draftin-webhooks-and-node-js.json"),
  "the-myth-of-mandatory-trade-mark-enforcement.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/the-myth-of-mandatory-trade-mark-enforcement.json"),
  "adventures-with-couch-db-nano-and-pjax.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/adventures-with-couch-db-nano-and-pjax.json"),
  "learnings-from-building-a-basic-angular-js-app.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/learnings-from-building-a-basic-angular-js-app.json"),
  "image-uploads-and-resizing-with-transloadit.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/image-uploads-and-resizing-with-transloadit.json"),
  "dev-404-page.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/dev-404-page.json"),
  "404.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/404.json"),
  "index.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/index.json"),
  "posts.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/posts.json"),
  "404-html.json": require("/mnt/c/Users/mbg/Documents/grabeh.net/.cache/json/404-html.json")
}