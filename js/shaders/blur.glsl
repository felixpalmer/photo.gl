vec3 drawBlur() {
  float d = uC / 1000.0;
  vec3 color = texture2D( uImage, vUv + vec2( -d, -d ) ).rgb;
  color += texture2D( uImage, vUv + vec2( -d, 0.0 ) ).rgb;
  color += texture2D( uImage, vUv + vec2( -d, d ) ).rgb;
  color += texture2D( uImage, vUv + vec2( 0.0, -d ) ).rgb;
  color += texture2D( uImage, vUv + vec2( 0.0, 0.0 ) ).rgb;
  color += texture2D( uImage, vUv + vec2( 0.0, d ) ).rgb;
  color += texture2D( uImage, vUv + vec2( d, -d ) ).rgb;
  color += texture2D( uImage, vUv + vec2( d, 0.0 ) ).rgb;
  color += texture2D( uImage, vUv + vec2( d, d ) ).rgb;
  return color / 9.0;
}
