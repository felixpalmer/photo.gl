vec3 drawPixellated() {
    vec2 uv = floor(uD * vUv) / uD;
    vec3 color = texture2D( uImage, uv ).rgb;
    return color;
}
