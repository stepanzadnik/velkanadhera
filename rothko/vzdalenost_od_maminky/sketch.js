// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var jakMocJeSmutnej = prompt("Kolik kilometrů jsi od maminky?", "");

function setup() {
  createCanvas(window.innerWidth,window.innerHeight-4);
}

function draw() { 
  background("navy");
  textSize(100);
  text("👹", 100, 430);

  // interaktivni smajlik
  smajlik();

  
}

function smajlik() {
  push();
  noFill();
  stroke("white");
  strokeWeight(5);
  arc(500, 350, 200, 200, 0, 2 * PI);
  ellipse(450, 300, 10, 10);
  ellipse(550, 300, 10, 10);
  ellipse(500, 350, 10, 10);

  //fill("white");
  
  if (jakMocJeSmutnej < 0) {
    arc(500, 400, 100, 50, 0, PI);
  } else if (jakMocJeSmutnej < 272) {
    arc(500, 400, 100, 50 - 50/272 * jakMocJeSmutnej, 0, PI);
  } else if (jakMocJeSmutnej > 544) {
    arc(500, 400, 100, 50, PI);
  } else if (jakMocJeSmutnej > 272) {
    arc(500, 400, 100, 50 - 50/272 * jakMocJeSmutnej, PI, 0);
  } else {
    line(450, 400, 550, 400);
  }

  pop();
}