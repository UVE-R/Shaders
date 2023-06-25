#ifdef GL_ES
precision mediump float;
#endif


// Higher number creates more of a water effect
const int AMOUNT = 3;


void main(void){
    
    vec2 coord = 20.0 * (gl_FragCoord.xy - iResolution.xy/ 2.0) / min(iResolution.x, iResolution.y);

    float len;

    for(int i =0; i < AMOUNT; i++){
        len = length(coord);

        coord.x = coord.x - cos(coord.y + sin(len)) + cos(iTime / 2.0);
        coord.y = coord.y - sin(coord.x + cos(len)) + sin(iTime / 2.0);
    }

    // Add colour by multiplying by constants
    vec3 color = vec3(cos(len * 2.0), cos(len * 3.0), cos(len * 1.0));
    gl_FragColor = vec4(color, 1.0);

}