function setup() {
	createCanvas(800, 800);
	background(100);
}

function draw() {
	if(mouseIsPressed){
	  circle(mouseX, mouseY, 20);
	}
}