#ifdef GL_ES
precision mediump float;
#endif

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}


void main(){
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 colour = vec3(0.0);
    float grain = 0.0;

    grain = random2d(vec2(sin(coord)) * iTime);

    colour = vec3(grain);

    gl_FragColor = vec4(colour, 1.0);
}