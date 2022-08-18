
var ship, ship_moving, sea, sea_1
function preload(){
ship_moving=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
sea=loadAnimation("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea_1=createSprite(-100, 200, 400, 400)
  sea_1.addAnimation("sea", sea);
  sea_1.scale = 0.25 
  sea_1.velocityX = +1
  ship=createSprite(200, 250, 50, 50);
  ship.addAnimation("moving", ship_moving);
  ship.scale = 0.3

 }


function draw() {
  background("blue");
 

  drawSprites();
}