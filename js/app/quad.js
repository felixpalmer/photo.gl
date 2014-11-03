define( [ 'gl', 'utils', 'shader!quad.vert', 'shader!quad.frag' ], function ( gl, utils, quadVert, quadFrag ) {
  var quad = {
    init: function() {
      console.log( 'Initialized quad with context', gl );

      // Create shader program for quad
      var program = utils.createProgram( quadVert.value, quadFrag.value );
    },
    draw: function () {
      console.log( 'draw' );
    }
  };

  quad.init();
  return quad;
} );
