mat2 rotate( float angle ) {
  return mat2( cos( angle ), sin( angle ), -sin( angle ), cos( angle ) );
}
