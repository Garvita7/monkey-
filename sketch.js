
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score = 0;
var background1,backgroundImage;

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  backgroundImage = loadImage("jungle.jpg");
 
}

function setup() {
  
 createCanvas(600,600);
  background1 = createSprite(200,200,5,5);
  background1.addImage(backgroundImage);
  //console.log(background1.x);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.visible = false;
  //console.log(ground.x);
  
  foodGroup = createGroup();
  obstacleGroup = createGroup();

}


function draw() {
  background("skyblue");
  
  if(background1.x<100){
  background1.x = background1.width/2;
  }
  background1.velocityX = -4;
  if(ground.x>0){
   ground.x = ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 0.8
  
   //score = score + Math.round(getFrameRate()/60);
  
  if(foodGroup.isTouching(monkey)){
    score = score+2;
    foodGroup.destroyEach();
  }
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.scale = 0.1;
    obstacleGroup.destroyEach();
  }
  
  switch (score){
    case 10: monkey.scale = 0.15;
          break;
    case 20: monkey.scale = 0.20;
          break;
    case 30: monkey.scale = 0.25;
          break;
    case 40: monkey.scale = 0.30;
          break;
    default: break;
  }
  
  
  
  
  monkey.collide(ground);
  
  drawSprites();
  spawnFood();
  spawnObstacle();
  fill("black");
  textSize(20);
  text("Score: "+score,230,50);
  textSize(25);
  text("-Press SPACE key to make the monkey jump", 20, 500);
  
}

function spawnFood(){
  if(frameCount%80 === 0){
    var banana = createSprite(200,Math.round(random(120,200)),10,40);
    banana.velocityX = -4;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.lifetime = 100;
    foodGroup.add(banana);
  }
  
}
function spawnObstacle(){
  if(frameCount%80 === 0){
    var obstacle = createSprite(300,330,10,40);
    obstacle.velocityX = -4;
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
   // Math.round(random(300,250));
    obstacleGroup.add(obstacle);
  }
  
}






