var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor = "green";
  
}

function draw() 
{
  background(30);
  if(keyIsDown(DOWN_ARROW))
  {
    box.y = box.y + 5;
    background("orange");
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    box.x = box.x + 5;
    background("teal");
  }
  if(keyIsDown(LEFT_ARROW))
  {
    box.x = box.x - 5;
    background("green");
  }
  if(keyIsDown(UP_ARROW))
  {
    box.y = box.y - 5;
    background("pink");
  }
  drawSprites();
}




