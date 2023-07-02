#ifdef GL_ES
precision mediump float;
#endif


#iChannel0 "file://image.png"


vec2 distort(vec2 p){
    vec2 center=iMouse.xy/iResolution.xy;
    float radius=.9;
    float strength=1.1;
    
    p-=center;
    
    float d=length(p);
    
    d/=radius;
    
    float dPow=pow(d,2.);
    
    float dRev=strength/(1.+dPow);
    p*=dRev;
    
    p+=center;
    
    return p;
}


void main(){
    vec2 coord = gl_FragCoord.xy / iResolution.xy;
    vec3 colour = vec3(0.0);

    coord = 1.9 * distort(coord); // Distort the image
    coord.x += iTime * 0.5; // Create slideshow effect

    gl_FragColor = texture(iChannel0, coord);
}