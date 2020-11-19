const Engine = Matter.Engine  
const World = Matter.World
const Bodies = Matter.Bodies



var engine, world, object 
var ball;

function setup() {
  createCanvas(400,400);


  engine = Engine.create()
world = engine.world
var options = {

isStatic : true

} 



object = Bodies.rectangle(200,390,400,50, options)
World.add(world, object)
console.log(object)

var ball_options = {

  restitution : 1

}

ball = Bodies.circle(200, 200, 30, ball_options);
World.add(world, ball);


}

function draw() {
  background(0);
  Engine.update(engine) 

  fill("brown")
  rectMode(CENTER)
  rect(object.position.x, object.position.y,400,50)

  fill("red");
  ellipseMode(RADIUS)
  ellipse(ball.position.x, ball.position.y, 30, 40);
}