define( [ 'gl', 'params', 'utils', 'shader!examples.vert', 'shader!examples.frag', 'shader!image.frag', 'shader!simple.vert', 'shader!simple.frag'],
function ( gl, params, utils, examplesVert, examplesFrag, imageFrag, simpleVert, simpleFrag ) {
  var quad = {
    init: function () {
      console.log( 'Initialized quad with context', gl );

      // Create shader program for quad
      quad.program = utils.createProgram( simpleVert.value, simpleFrag.value );
      gl.useProgram( quad.program );

      // Get handle on coordinate attribute in shader
      var coordinate = gl.getAttribLocation( quad.program, 'aCoordinate' );

      // Create a buffer to will hold the quad vertex data (defined in clip-space)
      var buffer = gl.createBuffer();
      gl.bindBuffer( gl.ARRAY_BUFFER, buffer );

      // Define 2 triangles that will form our quad
      quad.vertices = new Float32Array( [
        -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, // 1st triangle
        -1.0, 1.0, 1.0, -1.0, 1.0, 1.0 // 2nd triangle
      ] );

      // Put vertices into buffer
      gl.bufferData( gl.ARRAY_BUFFER, quad.vertices, gl.STATIC_DRAW );
      gl.enableVertexAttribArray( coordinate );
      gl.vertexAttribPointer( coordinate, 2, gl.FLOAT, false, 0, 0 );

      // Create texture that we will load image into
      quad.image = gl.createTexture();
    },
    loadImage: function ( url, onload ) {
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
        if ( onload ) {  onload(); }
      };
    },
    loadProgram: function ( program, onload ) {
      if ( program === 'simple' ) {
        quad.program = utils.createProgram( simpleVert.value, simpleFrag.value );
      } else if ( program === 'image' ) {
        quad.program = utils.createProgram( examplesVert.value, imageFrag.value );
      } else if ( program === 'examples' ) {
        quad.program = utils.createProgram( examplesVert.value, examplesFrag.value );
      } else {
        console.log( 'Unknown program requested: ', program );
      }
      
      gl.useProgram( quad.program );
      if ( onload ) {  onload(); }
    },
    draw: function () {
      // Update uniforms from params object
      var p = gl.getUniformLocation( quad.program, 'uBlackAndWhite' );
      gl.uniform1i( p, params.blackAndWhite );
      
      p = gl.getUniformLocation( quad.program, 'uA' );
      gl.uniform1f( p, params.a );
      p = gl.getUniformLocation( quad.program, 'uB' );
      gl.uniform1f( p, params.b );
      p = gl.getUniformLocation( quad.program, 'uC' );
      gl.uniform1f( p, params.c );
      p = gl.getUniformLocation( quad.program, 'uD' );
      gl.uniform1f( p, params.d );
      p = gl.getUniformLocation( quad.program, 'uTime' );
      gl.uniform1f( p, params.time );
      
      gl.drawArrays( gl.TRIANGLES, 0, quad.vertices.length / 2 );
    }
  };

  quad.init();
  return quad;
} );
