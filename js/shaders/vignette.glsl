vec3 vignette( vec3 color ) {
  vec2 polar = toPolar( vUv );
  return mix( color, vec3( 0 ), smoothstep( 0.2, 0.8, polar.x ) );
}
