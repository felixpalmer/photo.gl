Photo.gl
========

Example of how common photo manipulation operations can be achieved using JavaScript and WebGL. The focus is on writing GLSL code.

[Live demo] - coming

Running
=======

Just host this directory with a webserver of your choice. You can also use the `webserver.sh` script included (provided you have Python) to set up a simple development server.

Then visit http://localhost:3131 in your browser.

Shaders
=======

Custom shaders are put in `/js/shaders` and are saved as .vert or .frag files, for ease of editing. Shaders are loaded into the app using a Require.js plugin which can be found at `js/lib/shader`. This allow you to get the shader code in a module like so:


    define( ["shader!simple.frag"], function ( simpleFrag ) {
      // Value of shader is now in simpleFrag.value
      // The shader object also supports redefinition of #define statements
      simpleFrag.define( "faceColor", "vec3(1.0, 0, 0)" );
      ...


#include support
----------------

The shader plugin also supports `#include` statements, allowing you to split up your shader code - or share common code.

Shader validation
=================

You may want to validate your shaders during development, for this you can use the [GLSL validator tool](https://github.com/felixpalmer/glsl-validator), which also supports `#include` statements.

