precision highp float;

uniform sampler2D uImage;

uniform bool uBlackAndWhite;

uniform float uA;
uniform float uB;
uniform float uC;
uniform float uD;

varying vec2 vCoordinate;
varying vec2 vUv;

#include drawGradient.glsl
#include drawImage.glsl
#include toBW.glsl
#include polar.glsl
#include fisheye.glsl
#include twirl.glsl
#include waves.glsl
#include pixellate.glsl
#include vignette.glsl

void main() {
  vec3 color = vec3( 0.0 );
  color = drawGradient();
  color = drawImage();

  vec2 uv = vUv;
  vec2 polar = toPolar( uv );
  uv = fromPolar( polar );
  color = texture2D( uImage, uv ).rgb;

  if ( uBlackAndWhite ) color = toBW( color );
  gl_FragColor = vec4( color.rgb, 1.0 );
}
