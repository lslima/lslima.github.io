function setup(){
  createCanvas(windowWidth, windowHeight);
  noLoop();
}
function draw(){
  background(204);
  circlesL(800,0);
}
function circlesL(x, y){
	for(let i = 0; i <=3; i++){
    noFill();
		stroke( random (["gray", "black", "white"]));
		ellipse(random(0, x), y, random(000, displayWidth));
	}
}
