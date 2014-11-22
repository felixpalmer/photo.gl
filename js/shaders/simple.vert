precision highp float;

attribute vec2 aCoordinate;

varying vec2 vCoordinate;

void main() {
  // Clip space coordinates ( range: -1 -> 1 )
  vCoordinate = aCoordinate;

  // Output vertex
  gl_Position = vec4( aCoordinate, 0, 1 );
}
