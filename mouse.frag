#ifdef GL_ES
precision mediump float;
#endif

void main(){
    vec2 coord = gl_FragCoord.xy;
    vec3 colour = vec3(0.0);  

    colour.r = iMouse.x / iResolution.x;
    colour.b = iMouse.y / iResolution.y;

    gl_FragColor = vec4(colour, 1.0);
}