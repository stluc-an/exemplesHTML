function setup() {
  // put setup code here
    createCanvas(400,400);
    colorMode(HSB);
    strokeWeight(5);
    noFill();
}

function draw() {
    stroke(frameCount%255,200,255);
    rect(mouseX,mouseY,100,120);
}