precision highp float;

varying vec2 vCoordinate;

void drawGradient( inout vec3 color ) {
  //color = vec3( 0.5 + 0.5 * vCoordinate.x, 0.5 + 0.5 * vCoordinate.y, 0.0 );
  color = vec3( 0.5 + 0.5 * vCoordinate, 0.0 );
}

void main() {
  vec3 color = vec3( 0.0 );
  drawGradient( color );
  gl_FragColor = vec4( color.rgb, 1.0 );
}
