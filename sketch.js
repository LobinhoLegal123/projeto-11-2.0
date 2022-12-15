var sea,ship, seaImg, shipImg1;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");  


}

function setup(){

   sea = createSprite(625,200,200,200);
sea.addImage(seaImg)
sea.velocity.x = -2;
sea.scale = 0.3;

 ship = createSprite (200,300,10,10);
ship.addAnimation("navegando",shipImg1)
 ship.scale=0.25;
}


function draw() {
  background("blue");
    
  if(sea.x < 0){
    sea.x = sea.width/8;
}
  drawSprites();
    }
