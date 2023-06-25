#ifdef GL_ES
precision mediump float;
#endif



void main(void){
    
    vec2 coord = 6.0 * gl_FragCoord.xy / iResolution.xy;

    for (int n = 1; n < 100; n++){
        float i = float(n);
        coord += vec2(0.7 / i * sin(i * coord.y + iTime + 0.3 * i) + 0.8, 
                        0.4 / i * sin(i * coord.x + iTime + 0.3 * i) + 1.6);
    }

    vec3 color = vec3(0.5 * sin(coord.x) + 0.5, 0.5 * sin(coord.y) + 0.5, sin(coord.x + coord.y));      

    gl_FragColor = vec4(color, 1.0);


}