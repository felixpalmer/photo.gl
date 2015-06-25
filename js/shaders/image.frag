precision highp float;

uniform sampler2D uImage;

uniform bool uBlackAndWhite;

uniform float uA;
uniform float uB;
uniform float uC;
uniform float uD;
uniform float uTime;

varying vec2 vCoordinate;
varying vec2 vUv;

#include drawGradient.glsl
#include drawImage.glsl

void main() {
  vec3 color = vec3( 0.0 );
  vec3 grad = drawGradient();
  vec3 image = drawImage();

  gl_FragColor = vec4( image, 1.0 );
}
