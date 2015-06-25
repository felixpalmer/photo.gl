define( [ 'dat', 'params', 'quad' ], function ( dat, params, quad ) {
  var app = {
    init: function () {
      // Load in image to display
      var loadImage = function() {
        quad.loadImage( 'js/textures/' + params.image, onGuiChange );
      };
      var loadProgram = function() {
        quad.loadProgram( params.program, onGuiChange );
      };

      var onGuiChange = function() {
        app.needsRender = true;
      };

      // Configure controls
      var gui = new dat.GUI();
      gui.add( params, 'blackAndWhite' ).onChange( onGuiChange );
      gui.add( params, 'image', ['cat.jpg', 'goat.jpg', 'mountain.jpg'] ).onChange( loadImage );
      gui.add( params, 'program', ['simple', 'image', 'examples'] ).onChange( loadProgram );
      gui.add( params, 'a', -1, 1 ).onChange( onGuiChange );
      gui.add( params, 'b', -10, 10 ).onChange( onGuiChange );
      gui.add( params, 'c', 0, 10 ).onChange( onGuiChange );
      gui.add( params, 'd', 0, 100 ).onChange( onGuiChange );
      loadImage();

      // Kick off rendering loop
      app.render();
    },
    frame: 0,
    needsRender: true,
    render: function() {
      requestAnimationFrame( app.render );
      if ( ( app.frame++ % 10 ) === 1 || app.needsRender ) { // Unless forced, only render every tenth frame
        params.time = app.frame / 100;
        //app.needsRender = false; // Disable to render all the time
        quad.draw();
      }
    }
  };

  return app;
} );
