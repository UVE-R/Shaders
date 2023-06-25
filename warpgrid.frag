#ifdef GL_ES
precision mediump float;
#endif



void main(void){
    
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.0);

    color += sin(coord.x * cos(iTime / 3.0) * 60.0) + sin(coord.y * cos(iTime / 3.0) * 60.0);
    color += cos(coord.x * sin(iTime / 3.0) * 60.0) + sin(coord.y * cos(iTime / 3.0) * 60.0);

    // Change the brightness
    //color *= sin(iTime / 2.0) * 1.5;

    gl_FragColor = vec4(color, 1.0);


}