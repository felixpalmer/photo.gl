define( ['gl'], function ( gl ) {
  var createShader = function( type, src ) {
    // Create and compile shader
    var shader = gl.createShader( type );
    gl.shaderSource( shader, src );
    gl.compileShader( shader );

    // Check for errors
    var status = gl.getShaderParameter( shader, gl.COMPILE_STATUS );
    if ( !status ) {
      var error = gl.getShaderInfoLog( shader );
      console.log( 'Error compiling shader:\n\n', src, error );
      return null;
    }

    return shader;
  };

  var createProgram = function( vertShader, fragShader ) {
    // Create and link program
    var program = gl.createProgram();
    gl.attachShader( program, createShader( gl.VERTEX_SHADER, vertShader ) );
    gl.attachShader( program, createShader( gl.FRAGMENT_SHADER, fragShader ) );
    gl.linkProgram(program);

    // Check for errors
    var status = gl.getProgramParameter( program, gl.LINK_STATUS );
    if ( !status ) {
      var error = gl.getProgramInfoLog (program);
      console.log( 'Error linking program', program, error );
      return null;
    }

    return program;
  };

  return {
    createProgram: createProgram
  };
} );
