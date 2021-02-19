var Engine = Matter.Engine;
var  World = Matter.World;
var Events = Matter.Events;
var Bodies = Matter.Bodies;
 
var drops = [];
var maxDrops = 150;
function preload(){
    
}

function setup(){
createCanvas(600,800);
engine = Engine.create();
world = engine.world;
    
for (i = 0; i<maxDrops; i++)
{
 drops.push(new Drops(random(0,400), random(0,400)));
}


}

function draw()
{
    background("black");
    Engine.update(engine);

}   

