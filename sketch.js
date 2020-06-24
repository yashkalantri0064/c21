var movingRect2, movingRect;

function setup() {
  createCanvas(1200,800);
  movingRect2 = createSprite(400, 100, 50, 80);
  movingRect2.shapeColor = "green";
  movingRect2.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  movingRect2.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  bounceOff (movingRect , movingRect2);
  drawSprites();
}
