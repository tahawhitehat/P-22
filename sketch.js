var fairy,fairyImage
var star,starImage
var background2, bi
function preload()
{
   //preload the images here
  fairyImage = loadImage("fairy1.png");
  starImage = loadImage("star.png");
  bi = loadImage("starnight.png")
  }

function setup() {
  createCanvas(800, 750);
  background2 = createSprite(400,375)
  background2.addImage("bi",bi)

  fairy = createSprite(200,600)
  fairy.addImage("fairyImage",fairyImage)
  fairy.scale = 0.2
  
  star = createSprite(600,150)
  star.addImage("starImage",starImage)
  star.scale = 0.5

}


function draw() {
  background("black");
  fairy.velocityX = 0
  if (keyIsDown(LEFT_ARROW)){
    fairy.x = fairy.x -2
  }
  if (keyIsDown(RIGHT_ARROW)){
    fairy.x = fairy.x + 2
   }
    if (keyIsDown(DOWN_ARROW)){
        star.velocityY = 2
        }
  drawSprites();
}
