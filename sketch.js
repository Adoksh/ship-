var ship,shipImg,sea,seaImg;
function preload(){
  shipImg=loadAnimation("ship-1.png","ship-2.png");
  seaImg=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  ship=createSprite(50,180,20,50);
  ship.addAnimation("ship",shipImg);
  ship.scale=0.2
  sea=createSprite(10,260,600,10);
  sea.x=sea.width/2
  sea.velocityX=-2;
  sea.visible=false
}

function draw() {
  background(seaImg);
  if (keyDown("right")) {
    ship.x=ship.x+10
  }
  ship.velocityY=ship.velocityY+0.8
  if (sea.x<0) {
    sea.x=sea.width/2;
  }
ship.collide(sea);
 drawSprites();
}