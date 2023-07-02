#ifdef GL_ES
precision mediump float;
#endif

#iChannel0 "file://image.png"

float amount = 2.0;

float random2d(vec2 coord){
    return fract(sin(dot(coord.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main(){
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 colour = vec3(0.0);

    vec4 img = texture(iChannel0, coord);

    float noise = (random2d(coord) - 0.5) * amount;

    img.r += noise;
    img.g += noise;
    img.b += noise;   

    gl_FragColor = vec4(img);
}