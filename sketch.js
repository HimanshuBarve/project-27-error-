
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


	Engine.run(engine);
  bob1=new Bob(300,350,50);
  bob2=new Bob(350,350,50);
  bob3=new Bob(400,350,50);
  bob4=new Bob(450,350,50);
  bob5=new Bob(500,350,50);
  

    roof = new Roof(400,100,300,40);
   chain1= new Chain(bob1.body,ground1.body,-50*2,0);// two Variables Only 
    chain2= new Chain (bob2.body,ground1.body,-25*2,0);
     chain3= new Chain(bob3.body,ground1.body,-0*2,0);
     chain4= new Chain(bob4.body,ground1.body,25*2,0);
    chain5= new Chain(bob5.body,ground1.body,50*2,0);
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  drawSprites();
 
}



