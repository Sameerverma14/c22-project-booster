var plane 

var missile

var bg

var background

var END =0;

var PLAY =1;

var gameState = PLAY;

var planecrash 

var reload






function preload(){
          
      missileimage= loadImage("missile.webp")

      planeimage= loadImage ("plane.png")
  planecrashimage= loadImage("plane crash.png") 
            reloadimage= loadImage ("reload.png") 

            backgroundimage=loadImage("bg1.jpg")

}






function setup() {
    createCanvas(600, 600);


    
    bg=createSprite(100,150);
    bg.addImage(backgroundimage);
    bg.velocityX = -5;

    plane  = createSprite(70,150);
    plane.addAnimation("plane",plane.png);
    plane.scale=1;

    plane.setCollider("rectangle",0,0,40,40);

}

function draw() {
  drawSprites();
 missile = createSprite(70,150);
    if(gameState===PLAY){
     
  
        plane.y = World.mouseY;
       
        edges= createEdgeSprites();
        plane .collide(edges);
       
       //code to reset the background
       if(background.x < 0 ){
         background.x = width/2;
       }
         var missile = Math.round(random(1,3));
  
         if(plane.isTouching(missile)){
          gameState = END;
          background.velocityX = 0;
          
        }

        if (gameState === END) {
          reload.visible = true;
        
          textSize(20);
          fill(255);
          text("Press Up Arrow to Restart the game!", 500,200);
        
          background.velocityX = 0;
          
           planecrash.addAnimation("plane crash");
        
          background.setVelocityXEach(0);
          background.setLifetimeEach(-1);
        }
        if(keyDown("UP_ARROW")) {
          reset();
        }







    }

  }
  function plane(){
          
    plane.scale =0.06;
    
    plane.addAnimation("plane.png",plane);
    plane.setLifetime=170;
    plane.add(plane.png);
}

function missile(){
    missile =createSprite(1100,Math.round(random(50, 250)));
    missile.scale =0.06;
    
    missile.addAnimation("missile.webp",missile);
    missile.setLifetime=170;
    missile.add(missile.webp);
}
function reset(){
  gameState = PLAY;
  reload.visible = false;
  plane.addAnimation("plane.png",plane);
  
  planecrash.destroyEach();
  reload.destroyEach();
  missile.destroyEach();
  
 }
