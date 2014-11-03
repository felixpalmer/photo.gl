define( [ 'quad' ], function ( quad ) {
  var app = {
    init: function () {
      app.render();
    },
    render: function() {
      requestAnimationFrame( app.render );
      quad.draw();
    }
  };

  return app;
} );
