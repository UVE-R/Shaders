#ifdef GL_ES
precision mediump float;
#endif


float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}

// Return a 2x2 matrix to scale a vector
mat2 scale (vec2 scale){
    return mat2(scale.x, 0.0, 0.0, scale.y);
}


void main(void){
    
    vec2 coord = gl_FragCoord.xy / iResolution.xy;

    vec3 color = vec3(0.0);

    // Need to translate to center the circle
    coord -= vec2(0.5);
    coord = scale(vec2(sin(iTime) * 3.0) * 3.0) * coord;
    coord += vec2(0.5);

    color += vec3(circleshape(coord, 0.3));

    gl_FragColor = vec4(color, 1.0);


}


