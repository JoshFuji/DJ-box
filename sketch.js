let sound1, sound2, sound3, sound4, sound5;

let delay;

let r = 100;

function preload() {
  sound1 = loadSound("synth.wav");
  sound2 = loadSound("bomp.wav");
  sound3 = loadSound("hit.wav");
  sound4 = loadSound("blomp2.wav");
  sound5 = loadSound("synth.wav");
}
function setup() {
   var canvas = createCanvas(400, 400);

   canvas.parent('project');

  background(220);
  delay = new p5.Delay();
}

function draw() {
  if (keyIsDown(UP_ARROW)) {
    background(0);
    //sound1.play();
    //delay.process(sound1, 0.12,0.7, 2300)
    r = 200;
  } else if (keyIsDown(DOWN_ARROW)) {
    //background(255, 0, 0);
    sound1.stop();
    sound2.play();
    background(0);
    r = 50;
  } else if (keyIsDown(RIGHT_ARROW)) {
    //background(0, 0, 255);
    sound4.play();
    background(0);
    r = 150;
  } else if (keyIsDown(LEFT_ARROW)) {
    //background(0, 255, 0);
    sound3.play();
    background(0);
    r = 300;
  } else {
    r = 100;
    background(0);
  }

  noFill();
  stroke(random(255), random(255), random(255));
  strokeWeight(10);
  ellipse(height / 2, width / 2, r);
}

function keyPressed() {
  if (keyIsDown(UP_ARROW)) {
    background(0);
    sound1.play();
    delay.process(sound1, 0.12, 0.7, 2300);
    r = 200;
  }
  if (keyIsDown(DOWN_ARROW)) {
    //background(255, 0, 0);
    sound1.stop();
    sound2.play();
  }
  if (keyIsDown(LEFT_ARROW)) {
    //background(0, 255, 0);
    sound3.play();
  }
  if (keyIsDown(RIGHT_ARROW)) {
    //background(0, 0, 255);
    sound4.play();
  }
  if (keyIsDown(TAB)) {
    //background(0);
    sound5.play();
  }
}
