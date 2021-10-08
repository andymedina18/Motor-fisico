//CONSTANTES (Espacio de nombres)
/*
  Engine : crea el motor fisico
  World : creas nuevo mundo para almacenar objetos    (necesita el motor)
  Bodies : cuerpos del mundo                          (necesita el mundo)
*/
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
  var canvas = createCanvas(400,400);

  //Crear el mundo
  //variable + Engine (se crea el motro físico)
  engine = Engine.create();

  //El mundo se crea en torno al motor (base), se usan las VARIABLES    NO se argumenta
  world = engine.world;

  //variable + Bodie.forma    Solo se crea el cuerpo
  //Le decimos que sea estatico
  var ground_option = {isStatic : true}

  //esa variable de opcion se agrega al objeto en el argumento
  ground = Bodies.rectangle(200, 380, 50, 50, ground_option);

  //Agregar el cuerpo creado al MUNDO
  //A la CONSTANTE, se agregan tanto el mundo dependiente del motor como el objeto
  //Primero se hace DEPENDIENTE al mundo del motor
  World.add(world, ground);

  //variable de opcion para que rebote
  var ball_option = {restitution : 1.0}

  ball = Bodies.circle(200, 100, 25, ball_option);
  World.add(world, ball);
}

function draw() {
  background(0);  

  //Coloca exactamente en el centro (MAYUSCULA)

  //Se actualiza el motor
  Engine.update(engine);

  rectMode(CENTER);
  rect (ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);

  //Matter.World = mundo
  //Matter.Engine = motor
  //Matter.Bodies = cuerpo

}