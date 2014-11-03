precision highp float;

attribute vec2 aCoordinate;

varying vec2 vCoordinate;
varying vec2 vUv;

void main() {
  // Clip space coordinates ( range: -1 -> 1 )
  vCoordinate = aCoordinate;

  // Texture coordaintes ( range: 0 -> 1 )
  vUv = vCoordinate;
  vUv *= vec2( 1.0, -1.0 ); // Flip y axis
  vUv = 0.5 + 0.5 * vUv; // Re-scale to 0 -> 1

  // Output vertex
  gl_Position = vec4( aCoordinate, 0, 1 );
}
