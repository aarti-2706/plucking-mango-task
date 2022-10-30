const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bodies = [];
let boy, boyimage;

function preload() {
	boyimage = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//create sprite to add boy image

	//Create the Bodies Here.
	ground = new Ground(width / 2, height, width, 50);
	bodies.push(ground);

	tree = new Tree(600, 400);
	bodies.push(tree);

	stone = new Stone(150, 520);
	bodies.push(stone);

	launcher = new Launcher(stone.body, { x: 150, y: 510 });
	bodies.push(launcher);

	mango1 = new Mango(670, 160);
	bodies.push(mango1);

	mango2 = new Mango(590, 325);
	bodies.push(mango2);

	mango3 = new Mango(610, 205);
	bodies.push(mango3);

	mango4 = new Mango(540, 245);
	bodies.push(mango4);

	mango5 = new Mango(690, 270);
	bodies.push(mango5);

	mango6 = new Mango(485, 310);
	bodies.push(mango6);

	mango7 = new Mango(750, 320);
	bodies.push(mango7);

	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
	background(225);

	drawSprites();

	for (let i = 0; i < bodies.length; i++) {
		bodies[i].display();
	}

	//check collision with each mango with detectcollision function

}

function keyPressed() {
	//write a code to play the game again on pressing space key
}


function mouseDragged() {
	if (launcher.constraint.bodyA)
		Body.setPosition(stone.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
	launcher.fly();
}

function detectColission(stone, mango) {
	let distance = dist(stone.body.position.x, stone.body.position.y, mango.body.position.x, mango.body.position.y);
	console.log(stone.radius);
	if (distance <= stone.radius + mango.radius) {
		Body.setStatic(mango.body, false);
	}
}