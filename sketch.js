
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0;
var survivalTime=0;

function preload(){
  
  
monkey_running=loadAnimation("sprite_0.png","sprite_1.png", "sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png", "sprite_6.png","sprite_7.png","sprite_8.png")
  
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey=createSprite(80,315,20,20)
  monkey.addAnimation("hi",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  console.log(ground.x);

  foodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  stroke("brown");
  textSize(20);
  fill("black");
  text("Score:"+score,200,50);
  
  stroke("brown");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,0,50);
  
if(keyDown("space")) {
      monkey.velocityY = -15;
     }
    monkey.velocityY = monkey.velocityY + 0.8; 
  if (ground.x<0){
    ground.x=ground.width/2;
  }
  monkey.collide(ground);
  
  obstacle();
  Banana();
  drawSprites();
}

function Banana(){
  if (frameCount % 80===0){
     var banana=createSprite(300,200,20,20);
      banana.y=Math.round(random(100,200));
    
      foodGroup.add(banana);
     banana.addAnimation("i",bananaImage);
      banana.velocityX=ground.velocityX;
    banana.lifetime=80;
    banana.scale=0.111; 
}
}
function obstacle(){
  if (frameCount % 300===0){
     var obstacle=createSprite(500,310,20,20);
      obstacleGroup.add(obstacle);
      obstacle.addImage(obstacleImage);
      obstacle.velocityX=ground.velocityX;
    obstacle.scale=0.20;
    obstacle.lifetime=150;
  }
}





