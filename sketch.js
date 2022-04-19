
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world
var groundObj, leftSide, rightSide;
var ball

function preload()
{
	
}

function setup() {
	createCanvas(1300, 700);


	engine = Engine.create();
	world = engine.world;

	 groundObj = new Ground(width/2, 570, width, 20,);
	leftSide = new Ground(1100,500,20,120);
	rightSide = new Ground(900,500,20,120); 

	//Propriedades
	var ball_options = {
		isStatic: false,
		restitution: 0.8,
		friction: 0,
		density: 1.8
    }
	//Objetos
	ball = Bodies.circle(200, 200, 10, ball_options);
	World.add(world, ball);

	rectMode(CENTER);
	//ellipseMode(RADIUS);
  
}


function draw() {
  background(0);

  ellipse(ball.position.x, ball.position.y, 20);
  
groundObj.display();
  rightSide.display();
  leftSide.display(); 
  textSize(15)
  text("Eu Não tive muito tempo para fazer isso direito, fiz o que eu pude no meu tempo. Desculpa.", 500,20)
  
  drawSprites();

  Engine.run(engine);
}
function keyPressed() {
if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:1,y:-2})
  }
}


