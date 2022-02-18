let Router

if (window.location.href.indexOf('/about.html#') !== -1) {
  Router = require('@/pages/about/router')
} else {
  Router = require('@/pages/index/router')
}
export default Router