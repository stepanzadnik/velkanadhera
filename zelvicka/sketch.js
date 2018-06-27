var turtle, run, run2;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  strokeWeight(1);

  turtle = new Turtle(this);
  turtle.penDown = false;
  turtle.right(90);
  turtle.back(100);
  turtle.penDown = true;

  for (var i = 0; i <= 50; i++) {
    turtle.color = 'rgba(0, 0, 0, .2)';
    turtle.forward(90);
    turtle.right(91);
    turtle.color = 'rgba(255, 0, 0, .3)';
    turtle.forward(90);
    turtle.right(91);
  }
  
  run = turtle.getRun();
  run2 = turtle.getRun();
};

function draw() {
  background(200);

  // title text
  textSize(20);
  text('p5 turtle', 250, 100);

  push();

  translate(-50, -150);
  run.print(); // completely printed run

  translate(0, 200);
  run.animate(5); // slowly printed run

  translate(200, 0);
  run2.animate(20); // quickly printed run

  pop();
};

