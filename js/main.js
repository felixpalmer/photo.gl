// Start the app
require( ['detector', 'app', 'container'], function ( Detector, app, container ) {
  if ( ! Detector.webgl ) {
    Detector.addGetWebGLMessage();
    container.innerHTML = "";
  }

  // Initialize our app
  app.init();
} );
