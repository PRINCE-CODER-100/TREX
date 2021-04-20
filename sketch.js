var PLAY = 1;
var END = 0;
var gameState = PLAY;

var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;

function preload(){
  
  
  monkey_running =loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600,450);

ground = createSprite(400,350,900,10);
ground.velocityX = -4;
ground.x = ground.width /2;

monkey = createSprite(80,315,20,20);
monkey.addAnimation("mon",monkey_running);
monkey.scale = 0.1;

score = 0;
  
}


function draw() {

if(gameState === PLAY){
  score = score + Math.round(frameCount/150);
  ground.velocityX = -4;

  if (ground.x < 150){
    ground.x = ground.width/2;

}

  monkey.velocityY = monkey.velocityY+0.8;

  monkey.collide(ground);

  if (ground.x < 150){
    ground.x = ground.width/2;

if(keyDown("space")&& monkey.y >=310) {
  monkey.velocityY = -13;
}
  }
}
  background(220);
  drawSprites();
  text("Score: "+ score, 500,50);

}

function points(){
  if (frameCount % 60 === 0){
    banana = createSprite(100,250,20,20);
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.y = Math.round(random(250,240));
  }
  FoodGroup.add(banana);
}

function obstacles(){
  if(World.frameCount% 50 === 0){
    obstacle = createSprite(100,315,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4;
    obstacle.y = 590;
  }
  obstacleGroup.add(obstacle);
}