var cat,mouse
var catImg1,catImg2,catImg3
var mouseImg1,mouseImg2,mouseImg3
var garden,gardenImg
function preload() {
catImg1 = loadAnimation("images/cat1.png");
catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
catImg3 = loadAnimation("images/cat4.png");
mouseImg1 = loadAnimation("images/mouse1.png");
mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
mouseImg3 = loadAnimation("images/mouse4.png");
gardenImg = loadImage("images/garden.png");

}

function setup(){
 createCanvas(1000,800);
 cat = createSprite(800,650);
 cat.addAnimation("catImg",catImg1);
 cat.scale = 0.2;
 
 mouse = createSprite(200,650);
 mouse.addAnimation("mouseImg",mouseImg1);
mouse.scale = 0.1;

}

function draw() {

    background(gardenImg);
   if(cat.x - mouse.x < (cat.width - mouse.width)/2){
    cat.velocityX = 0;
     mouse.addAnimation("mouseImg",mouseImg3);
    mouse.changeAnimation("mouseImg")
    cat.addAnimation("catImg",catImg3);
   cat.changeAnimation("catImg") 
   }

    drawSprites();
}


function keyPressed() {
if(keyCode === LEFT_ARROW){
   cat.velocityX = -5;
    mouse.addAnimation("mouseImg",mouseImg2);
    mouse.changeAnimation("mouseImg")
    cat.addAnimation("catImg",catImg2);
   cat.changeAnimation("catImg")

}
}



