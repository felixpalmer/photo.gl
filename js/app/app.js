define( [ 'quad' ], function ( quad ) {
  var app = {
    init: function () {
      quad.loadImage( 'js/textures/mountain.jpg' );
      app.render();
    },
    render: function() {
      requestAnimationFrame( app.render );
      quad.draw();
    }
  };

  return app;
} );
