var garden,rabbit;
var gardenImg,rabbitImg;
var spin
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  leafImg = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200, 10, 10);
garden.addImage(gardenImg, "garden");

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg, "rabbit");

}


function draw() {
  background("white");
  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
  spin = Math.round(random(1,2))
  if (frameCount % 80 == 0) {
    if (spin == 1) {
      createApples()
    }
    else {
      createleaves()
    }
  }
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10)
  apple.addImage(appleImg, "apple")
  apple.scale = 0.04
  apple.velocityY = 2
  apple.lifetime = 150
}

function createleaves(){
  leaf = createSprite(random(50, 350), 40, 10, 10)
  leaf.addImage(leafImg, "leaf")
  leaf.scale = 0.1
  leaf.velocityY = 2
  leaf.lifetime = 150
}