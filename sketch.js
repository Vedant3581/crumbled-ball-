const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var paper,dustbin, ground, dustbin2, dustbin1;


function setup() {
	var canvas=createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;


	dustbin = new Dustbin(600, 650, 200, 20);

	dustbin1 = new Dustbin(700, 600, 20, 100);

	dustbin2 = new Dustbin(500, 600, 20, 100);

	paper = new Paper(100,600);

	 //Create a Ground
	 ground = Bodies.rectangle(width/2, 690, width, 10 , {isStatic:true} );
	 World.add(world, ground);	

	
}
function draw(){
	background("black");
	Engine.update(engine);
	dustbin.display();
	dustbin1.display();
	dustbin2.display();
	paper.display();
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body,paper.body.position,{x :50 ,y:-50});
	}
}




