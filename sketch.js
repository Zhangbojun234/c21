const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ball
var wall1, wall2, wall3


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	wall1 = new Ground(400, 695, 800, 10)
	wall2 = new Ground(600, 665, 10, 100)
	wall3 = new Ground(500, 665, 10, 100)
	ball = Bodies.circle(200, 400, 20)
	World.add(world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  wall1.show()
  wall2.show()
  wall3.show()
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 20)
  trash()
  drawSprites();
 
}

function trash(){
	if(keyDown("up")){
	Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.01, y:-0.023})
	}
}

