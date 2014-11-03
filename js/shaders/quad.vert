precision highp float;

attribute vec2 coordinate;

void main() {
  gl_Position = vec4( coordinate, 0, 1 );
}
