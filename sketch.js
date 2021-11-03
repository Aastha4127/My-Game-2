var bg,bgImg,ground;
var chris,chrisImg;
var mummy,mummyImg;
var skeletonImg;
var scarab,scarabImg;
var goldImg;
var life1,life2,life3, lifeImg;


function preload(){
  bgImg = loadImage("images/bg.jpg");
  chrisImg = loadImage("images/chris.png");
  mummyImg = loadImage("images/mummy.png");
  skeletonImg = loadImage("images/skeleton.png");
  scarabImg = loadImage("images/scarab.png");
  goldImg = loadImage("images/gold.png");
  lifeImg = loadImage("images/life.png");
}

function setup() {
  createCanvas(1500,730);

  bg = createSprite(850,375,1700,700);
  bg.x = bg.width/2;
  bg.addImage(bgImg)
  if (bg.x < 0) {
    bg.x = bg.width / 2;
  }

  ground = createSprite(850,725,1700,30);
  ground.shapeColor="#734E2F";

  chris = createSprite(1300, 570, 50, 50);
  chris.addImage("chris",chrisImg);
  chris.scale=0.7

  mummy = createSprite(200,520,50,50);
  mummy.addImage("mummy",mummyImg);
  mummy.scale=0.9;

  life1 = createSprite(1250,100,50,50);
  life1.addImage(lifeImg);
  life1.scale = 0.1;

  life2 = createSprite(1330,100,50,50);
  life2.addImage(lifeImg);
  life2.scale = 0.1;

  life3 = createSprite(1410,100,50,50);
  life3.addImage(lifeImg);
  life3.scale = 0.1;
}

function draw() {
  background(0);  
    bg.velocityX=-7
    if (bg.x < 0) {
    bg.x = bg.width / 2;
    }

  if(keyDown("space")){
    chris.velocityY = -25;
  }
  chris.velocityY = chris.velocityY+1.2;
  chris.collide(ground);
  
  if(World.frameCount%200===0){
    var gold = createSprite(0,160,50,50);
     gold.scale=0.7;
     gold.velocityX=9;
     gold.addImage(goldImg)
  }

  spawnObstacles();
  drawSprites();
}

function spawnObstacles(){
  if(World.frameCount%80===0){
   var obstacles = createSprite(200,630,50,50);
    obstacles.scale=0.3;
    obstacles.velocityX=10;
    r=Math.round(random(1,2));
    if(r==1){
      obstacles.addImage(skeletonImg);
    }else if (r==2){
      obstacles.addImage(scarabImg);
      obstacles.scale=0.2;
    }
  }

  
}