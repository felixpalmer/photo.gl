vec2 wave( vec2 uv ) {
  uv.y += 0.1 * uA * sin(10.0 * uB * uv.x);
  return uv;
}

vec2 radialWave( vec2 polar ) {
  polar.x += 0.1 * uA * sin(10.0 * uB * polar.x);
  return polar;
}
