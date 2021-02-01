
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinImg,dustbin;
var paperImg,paper;

function preload()
{
 dustbinImg=loadImage("dustbingreen.png");
 paperImg=loadImage("paper.png");	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin=createSprite(650,320,50,50);
	dustbin.addImage(dustbinImg);
	dustbin.scale=0.35;

	paper=createSprite(150,350,50,50);
	paper.addImage(paperImg);
	paper.scale=0.35;
   
    var options = { isStatic : 1.0 }
	this.body=Bodies.rectangle(400,390,800,30,options);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  
  rectMode(CENTER);
  rect(this.body.position.x,this.body.position.y,800,30);

  drawSprites();
 
}

function keyPressed() {
	if (keyCode=== UP_ARROW) {
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-85});
	}
	}

