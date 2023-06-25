#ifdef GL_ES
precision mediump float;
#endif

float rectshape(vec2 position, vec2 scale){
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    shaper *= vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}


// Create a rotation matrix, which rotates anti-clockwise by angle
mat2 rotate(float angle){
    return mat2( cos(angle), -sin(angle), sin(angle), cos(angle));
}

// Return a 2x2 matrix to scale a vector
mat2 scale (vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}


void main(void){
    
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.0);

    coord -= vec2(0.5);
    coord = rotate(iTime) * coord;
    //coord = scale(vec2(sin(iTime) * 3.0) * 3.0) * coord;
    coord += vec2(0.5);

    color += vec3(rectshape(coord, vec2(0.3,0.3)));

    gl_FragColor = vec4(color, 1.0);


}


