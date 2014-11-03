define( ['container'], function ( container ) {
  // Create canvas element
  var canvas = document.createElement( 'canvas' );
  canvas.width = container.offsetWidth;
  canvas.height = container.offsetHeight;

  // Insert into container
  container.innerHTML = '';
  container.appendChild( canvas );
  return canvas;
} );
