define( [ 'gl', 'utils', 'shader!quad.vert', 'shader!quad.frag' ], function ( gl, utils, quadVert, quadFrag ) {
  var quad = {
    init: function () {
      console.log( 'Initialized quad with context', gl );

      // Create shader program for quad
      var program = utils.createProgram( quadVert.value, quadFrag.value );
      gl.useProgram( program );

      // Get handle on coordinate attribute in shader
      var coordinate = gl.getAttribLocation( program, 'aCoordinate' );

      // Create a buffer to will hold the quad vertex data (defined in clip-space)
      var buffer = gl.createBuffer();
      gl.bindBuffer( gl.ARRAY_BUFFER, buffer );

      // Define 2 triangles that will form our quad
      quad.vertices = new Float32Array( [
        -1.0, -1.0, 1.0, -1.0, -1.0,  1.0, // 1st triangle
        -1.0, 1.0, 1.0, -1.0, 1.0,  1.0 // 2nd triangle
      ] );

      // Put vertices into buffer
      gl.bufferData( gl.ARRAY_BUFFER, quad.vertices, gl.STATIC_DRAW );
      gl.enableVertexAttribArray( coordinate );
      gl.vertexAttribPointer( coordinate, 2, gl.FLOAT, false, 0, 0 );

      // Create texture that we will load image into
      quad.image = gl.createTexture();
    },
    loadImage: function ( url ) {
      // Load image from url
      var image = new Image();
      image.src = url;
      image.onload = function() {
        console.log( 'Loaded image', url );
        //..and assign it to the texture
        gl.bindTexture( gl.TEXTURE_2D, quad.image );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST );
        gl.texParameteri( gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST );
        gl.texImage2D( gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image );
      };
    },
    draw: function () {
      gl.drawArrays( gl.TRIANGLES, 0, quad.vertices.length / 2 );
    }
  };

  quad.init();
  return quad;
} );
