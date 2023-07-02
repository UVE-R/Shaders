#ifdef GL_ES
precision mediump float;
#endif



void main(void) {

    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 colour = vec3(0.0);
    vec2 translate = vec2(-0.5);

    coord += translate;

    colour.r += abs(0.1 + length(coord) - 0.6 * abs(sin(iTime * 0.9 / 12.0)));
    colour.g += abs(0.2 + length(coord) - 0.6 * abs(sin(iTime * 0.6 / 4.0)));
    colour.b += abs(0.3 + length(coord) - 0.6 * abs(sin(iTime * 0.3 / 9.0)));


    // Change the constant to make the glare more pronounced
    gl_FragColor = vec4( 0.01 /colour, 1.0);

}