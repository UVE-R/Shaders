#ifdef GL_ES
precision mediump float;
#endif


float circleshape(vec2 position, float radius){
    return step(radius, length(position - vec2(0.5)));
}


void main(void){

    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.0);

    // Move the circle using the translate vector
    vec2 translate = vec2(1, 1);  // Top right
    // vec2 translate = vec2(1, -1); // Bottom right
    // vec2 translate = vec2(-1, 1); // Top left
    // vec2 translate = vec2(-1, -1); // Bottom left
    coord += translate * -0.5;

    color += vec3(circleshape(coord, 0.3));

    gl_FragColor = vec4(color, 1.0);
}







