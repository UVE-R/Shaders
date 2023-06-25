#ifdef GL_ES
precision mediump float;
#endif

const float PI = 3.1415926535;

float polygonshape (vec2 position, float apothem, float sides){

    // Used to center the shape
    position = position * 2.0 - 1.0;

    float angle = atan(position.x, position.y);

    // Denote the angle between the vertices of the polygon
    float slice = PI * 2.0 / sides;  

    return step(apothem, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));

}


void main(void) {

    vec2 position = gl_FragCoord.xy / iResolution.xy;

    vec3 color = vec3(0.0);

    float polygon = polygonshape(position, 0.6, 9.0);

    color = vec3(polygon);

    gl_FragColor = vec4(color, 1.0);

}