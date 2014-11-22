vec2 twirl( vec2 polar ) {
  polar.y += polar.x * uC;
  return polar;
}
