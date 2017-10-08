function setup() {
  createCanvas(500, 500);
  background(40);
  angleMode(DEGREES);
  
  frameRate(40);
}

function draw() {
  translate(width/2,height/2);
rotate(frameCount*6)
  noFill();

stroke(lerpColor(color('#ed463a'), color('#fedc13'), frameCount/120));
line(width/4,0,width/4*cos(frameCount*4),height/4*sin(frameCount*4))

  
  if (frameCount == 650) {
    noLoop();
  }

}
