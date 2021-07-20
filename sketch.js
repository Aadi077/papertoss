const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    bucket = new Bucket(); 
    paper = new Paper(150,420,20);
   

    ground=new Ground(600,590,1200,20,"blue");



}

function draw(){
    background("white");
    Engine.update(engine);
    bucket.display();
    paper.display();
   }
   function keyPressed(){
       if(keyCode==UP_ARROW){
           Matter.Body.applyForce(paper.body,paper.body.position,{x:130,y:-145});
       }
   }