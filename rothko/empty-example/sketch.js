// do not remove, allowes autocomplete
/// <reference path="./../p5.global-mode.d.ts" />

var ham = 15;
var pant = 0;
var pohybV = 0;
var pohybH = 0;
var poziceX = 314;
var poziceY = 314;

function setup() {
  createCanvas(627,627);
  // put setup code here
}

function draw() {
  poziceX = (poziceX + pohybH) % 627;
  poziceY = (poziceY + pohybV) % 627;
  if (poziceX < 0) {
    poziceX = poziceX + 627;
  }
  if (poziceY < 0) {
    poziceY = poziceY + 627;
  }
  background (255,255,0,80);
  stroke(0,0,0);
  fill(255,0,0);
  pacman(poziceX, poziceY, pohybH, pohybV);
  pusa();
  if (pant == 1) {
ham = ham - 1;
  }
else {
ham = ham + 1;

  }

  // put drawing code here
}

function pacman(x, y, pohybH, pohybV) {
  
  push();
  translate(x, y);
  rotate(-PI/6);
  if (pohybV == 0 && pohybH > 0) {
    rotate(0);
  }
    else if  (pohybV == 2 && pohybH == 4) {
      rotate(0.125 * PI);
    }
    else if  ((pohybV == 2 && pohybH == 2)||(pohybV == 4 && pohybH == 4)) {
      rotate(0.25 * PI);
    }
    else if  (pohybV == 4 && pohybH == 2) {
      rotate(0.375 * PI);
    }
    else if (pohybV > 0 && pohybH == 0) {
      rotate(0.5 * PI);
    }
    else if  (pohybV == 4 && pohybH == -2) {
      rotate(0.625 * PI);
    }
    else if  ((pohybV == 2 && pohybH == -2)||(pohybV == 4 && pohybH == -4)) {
      rotate(0.75 * PI);
    }
    else if  (pohybV == 2 && pohybH == -4) {
      rotate(0.875 * PI);
    }
    else if (pohybV == 0 && pohybH < 0) {
      rotate(PI);
    }
    else if  (pohybV == -2 && pohybH == -4) {
      rotate(1.125 * PI);
    }
    else if  ((pohybV == -2 && pohybH == -2)||(pohybV == -4 && pohybH == -4)) {
      rotate(1.25 * PI);
    }
    else if  (pohybV == -4 && pohybH == -2) {
      rotate(1.375 * PI);
    }
    else if (pohybV < 0 && pohybH == 0) {
      rotate(1.5 * PI);
    }
    else if  (pohybV == -4 && pohybH == 2) {
      rotate(1.625 * PI);
    }
    else if  ((pohybV == -2 && pohybH == 2)||(pohybV == -4 && pohybH == 4)) {
      rotate(1.75 * PI);
    }
    else if  (pohybV == -2 && pohybH == 4) {
      rotate(1.875 * PI);
    }
    
  
  arc(0, 0, 50, 50, 15/ham, - (15/ham) + 2.325 * PI, PIE);
  pop(); 
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
  if (keyCode === UP_ARROW) {
    pohybV = pohybV - 2;
    if (pohybV < -4)  {
      pohybV = -4;
    };
  } else if (keyCode === DOWN_ARROW) {
    pohybV = pohybV + 2;
    if (pohybV > 4)  {
      pohybV = 4;
    };
  }else if (keyCode === LEFT_ARROW) {
    pohybH = pohybH - 2;
    if (pohybH < -4)  {
      pohybH = -4;
    };
  }else if (keyCode === RIGHT_ARROW) {
    pohybH = pohybH + 2;
    if (pohybH > 4)  {
      pohybH = 4;
    };
  };

  return false; // prevent default
}
