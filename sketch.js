var fixedRect, movingRect,rectangle1,rectangle2,rectangle3,rectangle4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rectangle1 = createSprite(200,100,60,20)
  rectangle1.shapeColor = "pink"
  rectangle1.debug = true
  rectangle2 = createSprite(300,600,20,50)
  rectangle2.shapeColor = "yellow"
  rectangle2.debug = true
  rectangle3 = createSprite(500,500,90,40)
  rectangle3.shapeColor = "blue"
  rectangle3.velocityY = -2
  rectangle3.debug = true
  rectangle4 = createSprite(500,78,20,50)
  rectangle4.shapeColor = "purple"
  rectangle4.velocityY = 2
  rectangle4.debug = true
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(istouching(movingRect,rectangle1)){
    movingRect.shapeColor = "orange";
    rectangle1.shapeColor = "orange"; 
  }else{  movingRect.shapeColor = "white";
  rectangle1.shapeColor = "white";}
bounceof(rectangle3,rectangle4)


  drawSprites();
}






