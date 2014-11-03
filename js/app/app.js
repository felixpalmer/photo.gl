define( [ 'dat', 'params', 'quad' ], function ( dat, params, quad ) {
  var app = {
    init: function () {
      // Load in image to display
      quad.loadImage( 'js/textures/mountain.jpg' );

      // Configure controls
      var gui = new dat.GUI();
      gui.add( params, 'blackAndWhite' ).onChange( app.render );

      // Kick off rendering loop
      app.render();
    },
    render: function() {
      requestAnimationFrame( app.render );
      quad.draw();
    }
  };

  return app;
} );
