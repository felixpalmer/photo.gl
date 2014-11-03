void drawGradient( inout vec3 color ) {
  //color = vec3( 0.5 + 0.5 * vCoordinate.x, 0.5 + 0.5 * vCoordinate.y, 0.0 );
  color = vec3( 0.5 + 0.5 * vCoordinate, 0.0 );
}

