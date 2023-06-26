#ifdef GL_ES
precision mediump float;
#endif


void main(void){
    
    vec2 coord = 2.0 * (gl_FragCoord.xy * 2.0 - iResolution.xy) / min(iResolution.x, iResolution.y);

    coord.x += sin(iTime) + cos(iTime * 2.1);
    coord.y += cos(iTime) + sin(iTime * 1.6);

    vec3 color = vec3(0.0);

    color += 0.1 * (abs(sin(iTime)) + 0.1) / length(coord);

    gl_FragColor = vec4(color, 1.0);


}


