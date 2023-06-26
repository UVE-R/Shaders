#ifdef GL_ES
precision mediump float;
#endif


float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(void){
    
    vec2 coord = gl_FragCoord.xy* 0.02;
    coord -= iTime + vec2(sin(coord.y), cos(coord.x));

    float rand01 = fract(random2d(floor(coord)) + iTime / 60.0);
    float rand02 = fract(random2d(floor(coord)) + iTime / 40.0);
   
    rand01 *= 0.4 - length(fract(coord));

    gl_FragColor = vec4(rand01, rand02 * rand01 * 4.0, rand01 * 6.0, 1.0);

}


