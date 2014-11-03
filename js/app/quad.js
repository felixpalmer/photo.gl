define( [ 'gl' ], function ( gl ) {
  var quad = {
    init: function() {
      console.log( 'Initialized quad with context', gl );
      
    },
    draw: function () {
      console.log( 'draw' );
    }
  };

  quad.init();
  return quad;
} );
