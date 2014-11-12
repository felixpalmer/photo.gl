define( [ 'dat', 'params', 'quad' ], function ( dat, params, quad ) {
  var app = {
    init: function () {
      // Load in image to display
      var loadImage = function() {
        quad.loadImage( 'js/textures/' + params.image, onGuiChange );
      };

      var onGuiChange = function() {
        app.needsRender = true;
      };

      // Configure controls
      var gui = new dat.GUI();
      gui.add( params, 'blackAndWhite' ).onChange( onGuiChange );
      gui.add( params, 'image', ['cat.jpg', 'goat.jpg', 'mountain.jpg'] ).onChange( loadImage );
      loadImage();

      // Kick off rendering loop
      app.render();
    },
    frame: 0,
    needsRender: true,
    render: function() {
      requestAnimationFrame( app.render ); // Enable for continuous rendering
      if ( app.needsRender || ( app.frame++ % 10 ) === 1 ) { // Unless forced, only render every tenth frame
        app.needsRender = false;
        quad.draw();
      }
    }
  };

  return app;
} );
