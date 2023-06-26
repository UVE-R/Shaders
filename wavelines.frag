#ifdef GL_ES
precision mediump float;
#endif


void main(void){

    vec2 coord = (gl_FragCoord.xy / iResolution.xy);
    float color = 0.0;

    color += sin(coord.x * 6.0 + sin(iTime + coord.y * 90.0 + cos(coord.x * 30.0 + iTime * 2.0))) * 0.5;

    gl_FragColor = vec4(vec3(color + sin(iTime), color + coord.x, color), 1.0);
}
