
var ground, ground2, edge, e2
var trex ,trex_running;
function preload(){
trex_running=loadAnimation("Runner-1.png","Runner-2.png")
ground2=loadImage("path.png")
}

function setup(){
  createCanvas(500,1000)
  ground=createSprite(250,200,500,1000)
  ground.addImage(ground2)
  trex=createSprite(250,160,20,50)
  trex.scale = 0.1
  trex.addAnimation("running",trex_running)
  edge=createSprite(0,500,230,1000)
  e2=createSprite(500,500,-230,1000)
  e2.visible=false
  edge.visible=false
}

function draw(){
  background("lightblue")
 
trex.y=World.mouseY 
trex.x=World.mouseX 

console.log(trex.x)
trex.collide(e2)
trex.collide(edge)



ground.velocityY=2 

if (ground.y>400){
  ground.y=300
}

  drawSprites()
  

}
