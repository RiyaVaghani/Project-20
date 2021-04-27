
var bgIMG

var cat, mouse;

var catImg1, catImg2,catImg3;

var mouseImg1, mousImg2,mouseImg3;

function preload() {
    //load the images here
    bgIMG = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");
    mouseImg1 = loadAnimation("images/mouse1.png");
    mouseImg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    mouse = createSprite(100,650);
    mouse.addAnimation("mouseSitting", mouseImg1);
    mouse.scale = 0.2;

    cat = createSprite(900,650);
    cat.addAnimation("catSitting",catImg1);
    cat.scale = 0.2;
}

function draw() {

    background(bgIMG);
    //Write condition here to evalute if tom and jerry collide
    
    keyPressed();
    
    if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
        cat.velocityX = 0;
        cat.addAnimation("catHappy",catImg3);
        cat.changeAnimation("catHappy");
        mouse.addAnimation("mouseHappy",mouseImg3);
        mouse.changeAnimation("mouseHappy");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.changeAnimation("mouseTeasing");

      cat.velocityX = -5;
      cat.addAnimation("catWalking",catImg2);
      cat.changeAnimation("catWalking");
  }

}
