precision highp float;

varying vec2 vCoordinate;

void main() {
  vec3 color = vec3( vCoordinate, 0.0 );
  gl_FragColor = vec4( color, 1.0 );
}
