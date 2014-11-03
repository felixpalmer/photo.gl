define( ["container"],
function ( container ) {
  var app = {
    init: function () {
      container.innerHTML = 'Hello';
    },
  };

  return app;
} );
