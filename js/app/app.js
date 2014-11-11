define( [ 'dat', 'params', 'quad' ], function ( dat, params, quad ) {
  var app = {
    init: function () {
      // Load in image to display
      var loadImage = function() {
        quad.loadImage( 'js/textures/' + params.image, app.render );
      }

      // Configure controls
      var gui = new dat.GUI();
      gui.add( params, 'blackAndWhite' ).onChange( app.render );
      gui.add( params, 'image', ['cat.jpg', 'goat.jpg', 'mountain.jpg'] ).onChange( loadImage );
      loadImage();

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
