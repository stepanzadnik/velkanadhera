// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var x = 15;
var y = 1;
var z = 0;
var time = 0;
var timespeed = 1;

function setup() {
  createCanvas(627,627);
  // put setup code here
}

function draw() {
  var poziceY = time % 627;
  time = time + timespeed;
  background (255,255,0,20);
  fill("aquamarine");
  stroke(0,0,255);
  //rect(10, 10, 100 + 10 * x, 100 + 10 * y);
  stroke(0,0,0);
  fill(255,0,0);
  arc(poziceY, 50, 50, 50, 0, PI + HALF_PI + HALF_PI / (15/x), PIE);
  pusa();
  if (z == 1) {
x = x - 1;
  }
else {
x = x + 1;

  }
  if (keyIsPressed === true) {
    timespeed == 100;
  }
  else {
    timespeed == 1;
  }
  // put drawing code here
}

function pusa () {
if (x == 15) {
  z = 1;
}
else if (x == 5) {
  z = 0;
}
}

function keyReleased () {
  y = y + 1;
  if (y >= 50   ) {
    y = 0;
      }
};

function keyPressed() {
  if (keyCode === UP_ARROW) {
    fillVal = 255;
  } else if (keyCode === DOWN_ARROW) {
    fillVal = 0;
  }
  return false; // prevent default
}
