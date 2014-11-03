vec3 toBW( vec3 color ) {
  vec3 bw  = vec3( length( color ) ) / 1.732;
  return bw;
}
