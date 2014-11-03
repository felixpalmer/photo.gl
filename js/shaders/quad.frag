precision highp float;

uniform sampler2D uImage;

varying vec2 vCoordinate;
varying vec2 vUv;

#include drawGradient.glsl

void main() {
  vec3 color = vec3( 0.0 );
  drawGradient( color );
  color = texture2D( uImage, vUv ).rgb;
  gl_FragColor = vec4( color.rgb, 1.0 );
}
