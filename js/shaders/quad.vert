precision highp float;

attribute vec2 coordinate;
varying vec2 vCoordinate;

void main() {
  vCoordinate = coordinate;
  gl_Position = vec4( coordinate, 0, 1 );
}
