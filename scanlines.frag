#ifdef GL_ES
precision mediump float;
#endif


void main(void){

    vec2 coord = (gl_FragCoord.xy / iResolution.xy) * 10.0;
    vec3 color = vec3(1.0);

    
    float size = 12.0;

    // Lines go right to left
    float alpha = sin(floor(coord.x * size) + iTime * 4.0) + 1.0 / 2.0;

    //Lines go top down
    //float alpha = sin(floor(coord.y * size) + iTime * 4.0) + 1.0 / 2.0; 

    // Causes dots instead 
    alpha += sin(floor(coord.y * size) + iTime * 4.0) + 1.0 / 2.0; 

    alpha = step(alpha, 0.1);

    float angle = atan(-coord.y + 0.25, coord.x - 0.5) * 0.1;
    float len = length(coord - vec2(0.5, 0.25));
    color.r += sin(len * 40.0 + angle * 40.0 + iTime);  
    color.g += cos(len * 30.0 + angle * 60.0 - iTime);  
    color.b += sin(len * 50.0 + angle * 40.0 + 3.0);  

    gl_FragColor = vec4(color, alpha);
}
