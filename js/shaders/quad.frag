precision highp float;

uniform sampler2D uImage;

uniform bool uBlackAndWhite;

varying vec2 vCoordinate;
varying vec2 vUv;

#include drawGradient.glsl
#include drawImage.glsl
#include toBW.glsl
#include polar.glsl

void main() {
  vec3 color = vec3( 0.0 );
  color = drawGradient();
  color = drawImage();
  if ( uBlackAndWhite ) color = toBW( color );

  vec2 uv = vUv;
  vec2 polar = toPolar( uv );
  uv = fromPolar( polar );
  color = texture2D( uImage, uv ).rgb;

  gl_FragColor = vec4( color.rgb, 1.0 );
}
