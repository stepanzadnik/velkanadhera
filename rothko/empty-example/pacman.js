// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var ham = 15;
var pant = 0;
var Pacman = function(x, y) {
    this.poziceX = x || (window.innerWidth+1)/2;
    this.poziceY = y || (window.innerHeight-3)/2;
    this.pohybV = 0;
    this.pohybH = 0;
    this.draw = function() {
      push();
      translate(this.poziceX, this.poziceY);
      rotate(-PI/6);
      if (this.pohybV == 0 && this.pohybH > 0) {
        rotate(0);
      }
      else if  (this.pohybV == 2 && this.pohybH == 4) {
        rotate(0.125 * PI);
      }
      else if  ((this.pohybV == 2 && this.pohybH == 2)||(this.pohybV == 4 && this.pohybH == 4)) {
        rotate(0.25 * PI);
      }
      else if  (this.pohybV == 4 && this.pohybH == 2) {
        rotate(0.375 * PI);
      }
      else if (this.pohybV > 0 && this.pohybH == 0) {
        rotate(0.5 * PI);
      }
      else if  (this.pohybV == 4 && this.pohybH == -2) {
        rotate(0.625 * PI);
      }
      else if  ((this.pohybV == 2 && this.pohybH == -2)||(this.pohybV == 4 && this.pohybH == -4)) {
        rotate(0.75 * PI);
      }
      else if  (this.pohybV == 2 && this.pohybH == -4) {
        rotate(0.875 * PI);
      }
      else if (this.pohybV == 0 && this.pohybH < 0) {
        rotate(PI);
      }
      else if  (this.pohybV == -2 && this.pohybH == -4) {
        rotate(1.125 * PI);
      }
      else if  ((this.pohybV == -2 && this.pohybH == -2)||(this.pohybV == -4 && this.pohybH == -4)) {
        rotate(1.25 * PI);
      }
      else if  (this.pohybV == -4 && this.pohybH == -2) {
        rotate(1.375 * PI);
      }
      else if (this.pohybV < 0 && this.pohybH == 0) {
        rotate(1.5 * PI);
      }
      else if  (this.pohybV == -4 && this.pohybH == 2) {
        rotate(1.625 * PI);
      }
      else if  ((this.pohybV == -2 && this.pohybH == 2)||(this.pohybV == -4 && this.pohybH == 4)) {
        rotate(1.75 * PI);
      }
      else if  (this.pohybV == -2 && this.pohybH == 4) {
        rotate(1.875 * PI);
        }

      arc(0, 0, 50, 50, 15/ham, - (15/ham) + 2.325 * PI, PIE);
      pop();
    };
    this.move = function() {
      this.poziceX = (this.poziceX + this.pohybH) % window.innerWidth;
      this.poziceY = (this.poziceY + this.pohybV) % (window.innerHeight-4);
      if (this.poziceX < 0) {
        this.poziceX = this.poziceX + window.innerWidth;
      }
      if (this.poziceY < 0) {
        this.poziceY = this.poziceY + (window.innerHeight-4);
      }
    };
    this.steer = function() {
      if (keyCode === UP_ARROW) {
        this.pohybV = this.pohybV - 2;
        if (this.pohybV < -4)  {
          this.pohybV = -4;
        };
      } else if (keyCode === DOWN_ARROW) {
        this.pohybV = this.pohybV + 2;
        if (this.pohybV > 4)  {
          this.pohybV = 4;
        };
      }else if (keyCode === LEFT_ARROW) {
        this.pohybH = this.pohybH - 2;
        if (this.pohybH < -4)  {
          this.pohybH = -4;
        };
      }else if (keyCode === RIGHT_ARROW) {
        this.pohybH = this.pohybH + 2;
        if (this.pohybH > 4)  {
          this.pohybH = 4;
        };
      };
    };
  };


function setup() {
  createCanvas(window.innerWidth,window.innerHeight-4);
  // put setup code here

  Pacman1 = new Pacman();
  Pacman2 = new Pacman(100, 100);
}



function draw() {
  background (255,255,0,80);
  stroke(0,0,0);
  fill(255,0,0);

  Pacman1.draw();
  Pacman2.draw();

  Pacman1.move();
  Pacman2.move();


  pusa();
  if (pant == 1) {
ham = ham - 1;
  }
else {
ham = ham + 1;

  }

  // put drawing code here
}



function pusa () {
if (ham == 30) {
  pant = 1;
}
else if (ham == 10) {
  pant = 0;
}
}


function keyPressed() {
  Pacman1.steer();
  Pacman2.steer();

  return false; // prevent default
}
