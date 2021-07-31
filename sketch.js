const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particle1;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var giffy, plinko_logo, bg2;
function preload() 
{
  giffy=loadImage("bg.gif");
  plinko_logo=loadImage("plinko1.png");
  bg2=loadImage("bg2.gif")
}
function setup() {
  createCanvas(800, 1000);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,800,width,15);

  //create division objects

  divisions= new Divisions(80,650,15,300)
  divisions2= new Divisions(160,650,15,300)
  divisions3= new Divisions(240,650,15,300)
  divisions4= new Divisions(320,650,15,300)
  divisions5= new Divisions(400,650,15,300)
  divisions6= new Divisions(480,650,15,300)
  divisions7= new Divisions(560,650,15,300)
  divisions8= new Divisions(640,650,15,300)
  divisions9= new Divisions(720,650,15,300)

//create 1st row of plinko objects
for (var j = 75; j <=width; j=j+50) { 
  plinkos.push(new Plinko(j,75));
}

//create 2nd row of plinko objects
for (var j = 50; j <=width-10; j=j+50) 
{
  plinkos.push(new Plinko(j,175));
}

//create 3rd row of plinko objects
for (var j = 75; j <=width; j=j+50) 
{
  plinkos.push(new Plinko(j,275));
}

//create 4th row of plinko objects
for (var j = 50; j <=width-10; j=j+50) 
{
  plinkos.push(new Plinko(j,375));
}
 //particles

}


function draw() {
  background("black");
  textSize(20)
  imageMode(CENTER);
  image(bg2,400,890,800,250)
 image(plinko_logo,400,890,500,250)
 image(giffy,400,400,800,800)
  Engine.update(engine);



  //display the plinkos 
  
  
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
    divisions.display();
    divisions2.display();
    divisions3.display(); 
    divisions4.display();
    divisions5.display();
    divisions6.display();
    divisions7.display();
    divisions8.display();
    divisions9.display();
  

    ground.display();
    
    text("100",340,780);
    text("100",425,780);
    text("80",270,780);
    text("80",510,780);
    text("60",190,780);
    text("60",590,780);
    text("40",110,780);
    text("40",670,780);
    text("20",30,780);
    text("20",750,780);

  //display the paricles 
  particle1.display();
}
function keyPressed()
{
  if(keyCode===32)
  [
    particle1= new Particle()
  ]
}