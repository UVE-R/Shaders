#ifdef GL_ES
precision mediump float;
#endif


float noise1d(float v){
    return cos(v + cos(v * 90.0) * 100.0) * 0.5 + 0.5;
}


void main(){
    vec2 coord = gl_FragCoord.xy;
    vec3 colour = vec3(0.0);

    colour.r += noise1d(iTime);

    gl_FragColor = vec4(colour, 1.0);
}