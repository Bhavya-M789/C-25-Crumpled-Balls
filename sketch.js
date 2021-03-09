
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var trash1,ground1, paper1, trashImage, trash;
var world;

function preload(){
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ground1=new ground(width/2,670,width,20);
	trash1=new dustbin(1200,650, 300, 200);
	paper1 = new paper(200, 450, 70);

    

	var render = Render.create({
		element: document.body, 
		engine: engine, 
		options: {
			width: 1600, 
			height: 700, 
			wireframes: false
		}
	})
	Engine.run(engine);
	Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background(230);
//   trash = createSprite(100, 100, 100, 100);
//   trash.addImage(trashImage);
//   trash.x = trash1.x;
//   trash.y = trash1.y;
//   trash.width = trash1.width;
//   trash.height = trash1.height;

  ground1.display();
  trash1.display();
  paper1.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 120, y: -115});
	}
}
