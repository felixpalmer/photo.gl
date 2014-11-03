// Configure Require.js
var require = {
  // Default load path for js files
  baseUrl: 'js/app',
  shim: {
    'dat': { exports: 'dat' },
    'detector': { exports: 'Detector' }
  },
  // Third party code lives in js/lib
  paths: {
    dat: '../lib/dat.gui.min',
    detector: '../lib/Detector',
    // Require.js plugins
    text: '../lib/text',
    shader: '../lib/shader',
    // Where to look for shader files
    shaders: '../shaders'
  }
};
