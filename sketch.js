const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2;
var ground
function preload(){
  dustbinimage= loadImage("dustbingreen.png")
}
function setup() {
  var canvas = createCanvas(800,700);
  engine = Engine.create();
  world = engine.world;
  ground= new Ground(400,650,800,10);
  box1 = new Dustbin(470,605,10,75);
  box2 = new Dustbin (540,640,150,10);
  box3 = new Dustbin (610,600,10,70);
  
  ball= new papper(200,200,30);
  dustbin= createSprite(550,550,10,10);
 dustbin.addImage(dustbinimage);
 dustbin.scale= 0.65; 
  
}

function draw() {
  background(255,255,255);  
 
  Engine.update(engine);

  console.log(box1.body.angle);
  ball.display();
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
}
function keyPressed(){
  if(keyCode===UP_ARROW){
  Matter.Body.applyForce(ball.body,ball.body.position,{x:100,y:-100})
  }
}