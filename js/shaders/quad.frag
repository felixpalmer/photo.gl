precision highp float;

varying vec2 vCoordinate;
varying vec2 vUv;

#include drawGradient.glsl
#include drawImage.glsl
#include toBW.glsl

void main() {
  vec3 color = vec3( 0.0 );
  color = drawGradient();
  color = drawImage();
  color = toBW( color );

  gl_FragColor = vec4( color.rgb, 1.0 );
}
