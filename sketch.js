const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubi;
var emerald;
var diamond;
var lapiz;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubi = new Rubi(500,520,10,10);
    emerald = new Emerald(540,520,30,30);
    diamond = new Diamond(570,520,10,10);
    lapiz = new Lapiz(600,520,20,20);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubi.display();
    emerald.display();
    diamond.display();
    lapiz.display();
 
}