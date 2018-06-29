var turtle, run, size = toy.measure();
var count = 5;
var rozmer = 60;
var kolo = 40;

//function setup() {
  //createCanvas(400, 400);
  //angleMode(DEGREES);
  //strokeWeight(1);
//}

function praveokno () {
	turtle.left(kolo);
	turtle.forward(rozmer*kolo/360);
}

function leveokno () {
	turtle.right(kolo);
	turtle.forward(rozmer/kolo*kolo*kolo/360);
}

function house() {
  turtle.penDown = true;
  turtle.forward(rozmer);
  turtle.right(45);
  turtle.forward(Math.sqrt(Math.pow(rozmer, 2)/2));
  turtle.right(90);
  turtle.forward(Math.sqrt(Math.pow(rozmer, 2)/2));
  turtle.right(45);
  turtle.forward(rozmer);
  turtle.right(90);
  turtle.forward(rozmer*0.375);
  turtle.right(90);
  turtle.forward(rozmer*0.5);
  turtle.penDown = false;
  	turtle.forward(rozmer*0.325);
  	turtle.right(90);
  	turtle.forward(rozmer*0.25);
  	turtle.left(90);
  turtle.penDown = true;
  repeat(praveokno, 360/kolo);
  turtle.left(90);
  turtle.penDown = false;
  turtle.forward(rozmer*0.75);
  turtle.right(90);
  turtle.penDown = true;
  repeat(leveokno, 360/kolo);
  turtle.penDown = false;
  turtle.right(90);
  turtle.forward(rozmer*0.50);
  turtle.right(90);
  turtle.forward(rozmer*0.325);
  turtle.penDown = true;
  turtle.right(90);
  turtle.forward(rozmer*0.25);
  turtle.left(90);
  turtle.forward(rozmer*0.5);
  turtle.right(90);
  turtle.forward(rozmer*0.375);
  turtle.right(90);
  turtle.penDown = false;
  turtle.forward(rozmer);
  turtle.right(90);
  turtle.penDown = true;
  turtle.forward(rozmer);
  turtle.right(90);
  turtle.penDown = false;
  turtle.forward(rozmer);
  turtle.right(180);
                 
  // nakreslete domek

  moveOn();
}

function moveOn(i) {
  turtle.penDown = false;
  turtle.right(90);
  turtle.forward(40);
  turtle.left(90);
}

p.setup = function() {
  p.createCanvas(size.w, size.h);
  p.angleMode(p.DEGREES);

  turtle = new Turtle(p, 20, 200);
  turtle.color = 'white';
  repeat(house, count);

  run = turtle.getRun();
  turtle.right(720);
};

p.draw = function() {
  p.background('#f60');
  run.animate(100);
};

function repeat(fn, n) {
  var a = Array.apply(null, Array(n)).map(
    function (_, i) {return i + 1;}
  ).forEach(fn);
}
