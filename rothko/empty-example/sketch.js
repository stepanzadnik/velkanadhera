// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />
var gameOver = false;

var Pacman = function(x, y, leva, prava, horni, dolni, barva) {
    this.poziceX = x || (window.innerWidth+1)/4;
    this.poziceY = y || (window.innerHeight-3)/2;
    this.left = leva || LEFT_ARROW;
    this.right = prava || RIGHT_ARROW;
    this.up = horni || UP_ARROW;
    this.down = dolni || DOWN_ARROW;
    this.color = barva || "red";
    this.pohybV = 0;
    this.pohybH = 0;
    this.ham = 15;
    this.pant = 0;
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

  fill(this.color);  
        arc(0, 0, 50, 50, 15/this.ham, - (15/this.ham) + 2.325 * PI, PIE);
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
      if (keyCode === this.up) {
        this.pohybV = this.pohybV - 2;
        if (this.pohybV < -4)  {
          this.pohybV = -4;
        };
      } else if (keyCode === this.down) {
        this.pohybV = this.pohybV + 2;
        if (this.pohybV > 4)  {
          this.pohybV = 4;
        };
      }else if (keyCode === this.left) {
        this.pohybH = this.pohybH - 2;
        if (this.pohybH < -4)  {
          this.pohybH = -4;
        };
      }else if (keyCode === this.right) {
        this.pohybH = this.pohybH + 2;
        if (this.pohybH > 4)  {
          this.pohybH = 4;
        };
      };
    };
    this.pusa = function() {
      if (this.ham == 30) {
        this.pant = 1;
        }
        else if (this.ham == 10) {
        this.pant = 0;
        }
        else {
      };
      
      if (this.pant == 1) {
        this.ham = this.ham - 1;
          }
        else {
        this.ham = this.ham + 1;
        };
      };
  };


function setup() {
  createCanvas(window.innerWidth,window.innerHeight-4);
  // put setup code here

  Pacman1 = new Pacman();
  Pacman2 = new Pacman((window.innerWidth+1)*3/4, (window.innerHeight-3)/2, 65, 68, 87, 83, "green");
}

function draw() {
  if (!gameOver) {
    background (255,255,0,80);
  stroke(0,0,0);

  Pacman1.draw();
  Pacman2.draw();

  Pacman1.move();
  Pacman2.move();

  Pacman1.pusa();
  Pacman2.pusa();
  
if (Math.abs(Pacman1.poziceX % window.innerWidth - Pacman2.poziceX % window.innerWidth) < 50 && Math.abs(Pacman1.poziceY % (window.innerHeight-4) - Pacman2.poziceY % (window.innerHeight-4)) < 50){
  alert("KONEC HRY");
  gameOver=true;
  document.location.reload();
};

  }

  

  //if (Math.abs(Pacman1.poziceX % window.innerWidth - Pacman2.poziceX % window.innerWidth) < 50 && Math.abs(Pacman1.poziceY % (window.innerHeight-4) - Pacman2.poziceY % (window.innerHeight-4)) < 50){
  //  alert("KONEC HRY");
  //  document.location.reload();
  //};

  // put drawing code here
}




function keyPressed() {
  Pacman1.steer();
  Pacman2.steer();

  return false; // prevent default
}
