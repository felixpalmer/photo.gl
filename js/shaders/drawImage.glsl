vec3 drawImage() {
  vec3 color = texture2D( uImage, vUv ).rgb;
  return color;
}
