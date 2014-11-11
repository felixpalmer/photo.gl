precision highp float;

uniform sampler2D uImage;

uniform bool uBlackAndWhite;

varying vec2 vCoordinate;
varying vec2 vUv;

#include drawGradient.glsl
#include drawImage.glsl
#include toBW.glsl

void main() {
  vec3 color = vec3( 0.0 );
  color = drawGradient();
  color = drawImage();
  if ( uBlackAndWhite ) color = toBW( color );

  vec2 uv = vUv;
  color = texture2D( uImage, uv ).rgb;

  gl_FragColor = vec4( color.rgb, 1.0 );
}
