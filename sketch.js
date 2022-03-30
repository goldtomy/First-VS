var ball;
var img;

function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
  ball.addAnimation("a", img);
  ball.scale = 0.05;
}

function draw() 
{
  background(30);

  if (keyDown(UP_ARROW)){
    ball.y -= 5;
  }
  if (keyDown(DOWN_ARROW)){
    ball.y += 5;
  }
  if (keyDown(LEFT_ARROW)){
    ball.x -= 5;
  }
  if(keyDown(RIGHT_ARROW)){
    ball.x += 5;
  }

  ;

  drawSprites();
}

function preload(){
  img = loadImage("ball.jpg");
}




