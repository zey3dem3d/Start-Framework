
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Start-Framework/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Start-Framework"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/start-framework"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/about"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/contact"
  },
  {
    "renderMode": 2,
    "route": "/Start-Framework/**"
  }
],
  assets: {
    'index.csr.html': {size: 6034, hash: 'a0cac26eb900bcadb51a8158090ec528af0bb7a39a25089e96836bc21752b2f6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1100, hash: '91563b5eed1a003490030e4cfb399fee5b6c17c0e398abc6da5bb5850ba8b674', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 20532, hash: 'aa48ffcf224fd332bd83dcd49298358c78f9f7ce136875f071faaaa709ae837b', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'start-framework/index.html': {size: 19890, hash: 'cad22a5088f4bf9556b74ebc7e54851a9e10bdb5b07dce900d90cc9dfc42138a', text: () => import('./assets-chunks/start-framework_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 25751, hash: '5b804d6d7b88c91f0060e64d1e6b300f7318f33d16158dd72d8a9e1003f32c67', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 28508, hash: '4631af0174f5f054710f6ef1a32853e2e48b135bce5d46f371584f0392d1976b', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 19890, hash: 'cad22a5088f4bf9556b74ebc7e54851a9e10bdb5b07dce900d90cc9dfc42138a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-MDJ3JBSL.css': {size: 305392, hash: 'Z0Jrm+3HfBs', text: () => import('./assets-chunks/styles-MDJ3JBSL_css.mjs').then(m => m.default)}
  },
};
