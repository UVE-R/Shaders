#ifdef GL_ES
precision mediump float;
#endif

// Create a rotation matrix, which rotates anti-clockwise by angle
mat2 rotate(float angle){
    return mat2( cos(angle), -sin(angle), sin(angle), cos(angle));
}

// Return a 2x2 matrix to scale a vector
mat2 scale (vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}

void main(void){
    
    vec2 coord = (gl_FragCoord.xy / iResolution.xy);

    float color = 0.0;

    /* Apply rotation and scaling
    coord = rotate(iTime * 2.0) * coord;
    coord = scale(vec2( sin(iTime * 0.5)) * 5.0) * coord;
    */

    // Creates wavy lines:
    color += sin(coord.x * 50.0 + cos(iTime + coord.y * 10.0 )) * 2.0;

    /* Create even wavier lines
    color += sin(coord.x * 50.0 + cos(iTime + coord.y * 10.0 + sin(coord.x * 50.0 + iTime * 2.0))) * 2.0;
    color += cos(coord.x * 30.0 + sin(iTime + coord.y * 10.0 + cos(coord.x * 50.0 + iTime * 2.0))) * 1.5;
    */

    gl_FragColor = vec4(vec3(color+ coord.x, color + coord.y, color), 1.0);

}