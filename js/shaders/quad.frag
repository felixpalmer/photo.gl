precision highp float;

varying vec2 vCoordinate;

#include drawGradient.glsl

void main() {
  vec3 color = vec3( 0.0 );
  drawGradient( color );
  gl_FragColor = vec4( color.rgb, 1.0 );
}
