#ifdef GL_ES
precision mediump float;
#endif


// Return 1 if point within circle
// Else, return 0
float circleshape(vec2 position, float radius){
	return step(radius, length(position - vec2(0.5)));
}


void main(){

	
	// FragCoord - Coordinate system of the fragment shader
	// Dividing by resolution allows us to use normal numbers and 
	// helps with centering on screen
	vec2 position = gl_FragCoord.xy / iResolution.xy;

	float circle = circleshape(position, 0.2);

	// All points within the circle coloured black (due to 1.0)
	// Other points coloured white
	vec3 color = vec3(circle);

	/*
	// Colour the inside of the circle red
	if(circle < 0.5){
		color = vec3(0.8275, 0.1098, 0.1098);
	}
	*/

	gl_FragColor = vec4(color,1.0);


}