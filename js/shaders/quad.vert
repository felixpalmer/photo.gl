precision highp float;

attribute vec2 aCoordinate;

varying vec2 vCoordinate;

void main() {
  vCoordinate = aCoordinate;
  gl_Position = vec4( aCoordinate, 0, 1 );
}
