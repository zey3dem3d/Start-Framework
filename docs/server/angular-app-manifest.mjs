
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/test/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/test"
  },
  {
    "renderMode": 2,
    "route": "/test/start-framework"
  },
  {
    "renderMode": 2,
    "route": "/test/about"
  },
  {
    "renderMode": 2,
    "route": "/test/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/test/contact"
  },
  {
    "renderMode": 2,
    "route": "/test/**"
  }
],
  assets: {
    'index.csr.html': {size: 6023, hash: 'be3553b579efcc68a6cad80fbdc9d127fe7d377cfbbd7d95c959f5a5a39a230b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1089, hash: 'e787f1b90bedc69268e145b96b0bc6502301b33df4889ba7356d1331b1a646fd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'start-framework/index.html': {size: 19835, hash: 'b27b69e6b08de321e61b5a79b7a382cabae9918a0b20f8f01f2a84a7acb12e4b', text: () => import('./assets-chunks/start-framework_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19835, hash: 'b27b69e6b08de321e61b5a79b7a382cabae9918a0b20f8f01f2a84a7acb12e4b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20477, hash: 'd6a7b47a1c2b7e4ff7fd710c8c6ffbe75f40fd4309a8370cf35708280a702eea', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25696, hash: 'ab7033feb10f89325734effa8ade1abc4a2708fbbcff32e113496c13c1b9ab1f', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 28453, hash: '3243601196475edf068984fc1ceb837f8353cc1c25668b5f48eaeccab6e572bd', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'styles-MDJ3JBSL.css': {size: 305392, hash: 'Z0Jrm+3HfBs', text: () => import('./assets-chunks/styles-MDJ3JBSL_css.mjs').then(m => m.default)}
  },
};
