#ifdef GL_ES
precision mediump float;
#endif


void main(void){
    
    vec2 coord = (gl_FragCoord.xy * 1.0 -  iResolution.xy);
    vec3 color = vec3(0.0);

    color += abs(cos(coord.x / 20.0) + sin(coord.y / 20.0) - cos(iTime));

    gl_FragColor = vec4(color, 1.0);

}


