var surface1, surface2, surface3,surface4
var box
var ground1, ground2, ground3, ground4

function setup() {
  createCanvas(600,400);
  
  surface1=createSprite(90, 300, 150, 30);
  surface2=createSprite(240, 300, 150, 30);
  surface3=createSprite(390, 300, 150, 30);
  surface4=createSprite(540, 300, 150, 30);

  surface1.shapeColor="blue";
  surface2.shapeColor="orange";
  surface3.shapeColor="magenta";
  surface4.shapeColor="green";

box=createSprite(random(20,600),100,25,25);
box.shapeColor='white';
box.velocityY=6;

ground1=createSprite(90,300,150,10);
ground2=createSprite(240,300,150,10);
ground3=createSprite(390,300,150,10);
ground4=createSprite(540,300,150,10);

ground1.shapeColor='blue';
ground2.shapeColor='orange';
ground3.shapeColor='magenta';
ground4.shapeColor='green';

}

function draw() {
  background(0,0,0); 
  box.collide(ground1);
  box.collide(ground2);
  box.collide(ground3);
  box.collide(ground4);

  if(surface1.isTouching(box)){
    box.shapeColor='blue';
  }
  if(surface2.isTouching(box)){
    box.shapeColor='orange';
  }
  if(surface3.isTouching(box)){
    box.shapeColor='magenta';
  }
  if(surface4.isTouching(box)){
    box.shapeColor='green';
  }
  drawSprites();
}