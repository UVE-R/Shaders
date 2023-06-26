#ifdef GL_ES
precision mediump float;
#endif

mat2 rotate(float angle){
    return mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
}

void main(void){
    
    vec2 coord = (gl_FragCoord.xy / iResolution.xy);
    vec3 color = vec3(0.0);

    // Centre the circle
    vec2 translate = vec2(-0.5, -0.5);
    coord += translate;

    // Cause the circle to spin
    coord = rotate(iTime * 0.1) * coord; 

    // Create 40 circles
    for(int i = 0; i < 40; i++){
        float radius = 0.3;
        float rad = radians(360.0/ 40.0) * float(i);
        color += 0.003 / length(coord + vec2(radius  * cos(rad), radius * sin(rad)));
    }  

    gl_FragColor = vec4(color, 1.0);

}


