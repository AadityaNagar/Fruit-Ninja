var PLAY = 1
var END = 0
var gameState = PLAY;
var background , backgroundImage
var sword , swordImage
var fruit1 , fruit1Image ,fruit1G,fruit2, fruit2Image,fruit2G ,fruit3, fruit3Image,fruit3G , fruit4, fruit4Image , fruit4G 
var alien1 ,alien1G, alien1Image , alien2 , alien2Image ,alien2G 
var gameOver , gameImage
var knifeSound
function preload(){
  backgroundImage = loadImage("background.png")
  
  swordImage = loadImage("sword.png")
  
  fruit1Image = loadImage("fruit1.png")
  fruit2Image = loadImage("fruit2.png")
  fruit3Image = loadImage("fruit3.png")
  fruit4Image = loadImage("fruit4.png")
  
  knifeSound = loadSound("knifeSwooshSound.mp3")
  
  alien1Image = loadImage("alien1.png")
  alien2Image = loadImage("alien2.png")
  
  gameImage = loadImage("gameover.png")
  gameSound = loadSound("gameover.mp3")
  
  }

function setup(){
  createCanvas(600,370)
  
  background = createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale = 3.3
  
  sword = createSprite(480,0,50,50);
  sword.addImage(swordImage); 
  sword.scale = 1;
  
  gameOver = createSprite(300,185,50,50)
  gameOver.addImage(gameImage)
  gameOver.scale = 1.5
  
  score = 0  
  fruit1G = new Group();
  fruit2G = new Group();
  fruit3G = new Group();  
  fruit4G = new Group();
  
  alien1G = new Group();
  alien2G = new Group();
  
  
  
}

function draw(){
  
  
  
 if(gameState === PLAY){
   sword.y = World.mouseY
   sword.x = World.mouseX
  
   fruit1G.velocityY=-(8+(score/4));
   fruit2G.velocityY=-(8+(score/4));
   fruit3G.velocityY=-(8+(score/4));
   fruit4G.velocityY=-(8+(score/4));
   alien1G.velocityY=-(8+(score/10));
   alien2G.velocityY=-(8+(score/10));
   
   
   
   if(sword.isTouching(fruit1G)) {
  fruit1G.destroyEach();
  score=score+2
     knifeSound.play()
}
   
   if(sword.isTouching(fruit2G)) {
  fruit2G.destroyEach();
  score=score+2
     knifeSound.play()
}
   if(sword.isTouching(fruit3G)) {
  fruit3G.destroyEach();
  score=score+2
     knifeSound.play()
}
   if(sword.isTouching(fruit4G)) {
  fruit4G.destroyEach();
  score=score+2
     knifeSound.play()
}
   gameOver.visible =false
   
   var select_fruit = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_fruit == 1) {
      fruit1();
    } else if (select_fruit == 2) {
      fruit2();
    } else if (select_fruit == 3) {
      fruit3();
    } else {
      fruit4();
    }

 }
   var select_alien = Math.round(random(1,2));
   if (World.frameCount % 200 == 0) {
    if (select_alien == 1) {
      alien1();
    } else if (select_alien == 2) {
      alien2();
    }
   }
   
 }
  if(alien1G.isTouching(sword)){
    gameState = END;
    gameSound.play()
    
  }
   if(alien2G.isTouching(sword)){
    gameState = END;
     gameSound.play()
  }
   if(gameState === END){
     gameOver.visible=true
     sword.visible=false
     fruit1G.destroyEach();
     fruit2G.destroyEach();
     fruit3G.destroyEach();
     fruit4G.destroyEach();
     alien1G.destroyEach();
     alien2G.destroyEach();
    
   }
   

  drawSprites();
    
    
   fill("yellow")
    textSize(30)
    textFont('Forte')
    text("Score: "+ score, 480,50);
    
  }
  

function fruit1(){
  var fruit1 = createSprite(10,Math.round(random(20,370)),10,10 );
  fruit1.addImage(fruit1Image)
  fruit1.velocityX = 5;
  fruit1.lifetime = 300;
  fruit1.scale=0.4;
  fruit1G.add(fruit1);
  return fruit1;
}
function fruit2(){
  var fruit2 = createSprite(10,Math.round(random(20,370)),10,10 );
  fruit2.addImage(fruit2Image)
  fruit2.velocityX = 5;
  fruit2.lifetime = 300;
  fruit2.scale=0.4;
  fruit2G.add(fruit2);
  return fruit2;
}
function fruit3(){
  var fruit3 = createSprite(600,Math.round(random(20,370)),10,10 );
  fruit3.addImage(fruit3Image)
  fruit3.velocityX = -5;
  fruit3.lifetime = 300;
  fruit3.scale=0.4;
  fruit3G.add(fruit3);
  return fruit3;
}
function fruit4(){
  var fruit4 = createSprite(10,Math.round(random(20,370)),10,10 );
  fruit4.addImage(fruit1Image)
  fruit4.velocityX = 5;
  fruit4.lifetime = 300;
  fruit4.scale=0.4;
  fruit4G.add(fruit4);
  return fruit4;
}


function alien1(){
  var alien1 = createSprite(600,Math.round(random(20,300)),10,10 );
  alien1.addImage(alien1Image)
  alien1.velocityX = -5;
  alien1.lifetime = 300;
  alien1.scale=1;
  alien1G.add(alien1);
  return alien1;
}
function alien2(){
  var alien2 = createSprite(10,Math.round(random(20,300)),10,10 );
  alien2.addImage(alien2Image)
  alien2.velocityX = 5;
  alien2.lifetime = 300;
  alien2.scale=1;
  alien2G.add(alien2);
  return alien2;
}
