#ifdef GL_ES
precision mediump float;
#endif


#iChannel0 "file://image.png"



void main(){
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 colour = vec3(0.0);

    vec4 img = texture(iChannel0, coord);

    img.r += sin(coord.x * 100.0);
    img.r += cos(coord.y * 100.0);

    gl_FragColor = vec4(img);
}