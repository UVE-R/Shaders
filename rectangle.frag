#ifdef GL_ES
precision mediump float;
#endif

// Returns 1.0 if inside the rectangle
// Otherwise returns 0.0 when outside the rectangle
float rectshape(vec2 position, vec2 scale){

    scale = vec2(0.5) - scale * 0.5;

    // (x < pos.x ? 0.0 : 1.0, y < pos.y ? 0.0, 1.0)
    // I.e. all points to the right of AND above scale's coords will be coloured white
    // Here we select the left and bottom edge of the rectangle
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));

    // We now need to select the top and right edge of the rectangle
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));

    // Alternatively, we could have:
    //shaper *= vec2(step(position.x, 1.0 - scale.x), step(position.y, 1.0 - scale.y));

    // Only colour white if both x and y are 1.0
    return shaper.x * shaper.y;

}



void main(void) {

    vec2 position = gl_FragCoord.xy / iResolution.xy;

    vec3 color = vec3(0.0);

    // Create rectangle with inputted with and height
    float rectangle = rectshape(position, vec2(0.3, 0.3));

    color = vec3(rectangle);

    gl_FragColor = vec4(color, 1.0);

}
