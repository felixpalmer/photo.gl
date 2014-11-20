vec2 fisheye( vec2 polar ) {
  polar.x = polar.x * polar.x * 2.0;
  return polar;
}
