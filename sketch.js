
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer1=new hammer(400,350);
	rubber1=new rubber(300,200,60);
	stone1=new stone(400,300,50,50);
	plane1=new plane(400,680,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  plane1.display();
  hammer1.display();
  stone1.display();
  rubber1.display();
  drawSprites();
 
}



