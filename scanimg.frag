#ifdef GL_ES
precision mediump float;
#endif


#iChannel0 "file://image.png"


float size = 10.0;
float speed = -10.0; // Set to negative to change direction 
bool flip = true; // Determine if lines are from the sides or from the top

void main(){
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 colour = vec3(0.0);

    vec4 img = texture(iChannel0, coord);

    if(flip){
        img.a = sin(floor(coord.x * size) - iTime * speed);
    } else {
        img.a = sin(floor(coord.y * size) - iTime * speed);
    }
    


    gl_FragColor = vec4(img);
}