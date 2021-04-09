const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Const = Matter.Constraint;

var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    crumpledPaper = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
    launcher = new slingShot(crumpledPaper.body,{x:250,y:200})
}

function draw(){
    background("white");
    Engine.update(engine);

    //text(mouseX+","+mouseY,200,200);

    
    ground.display();
    binPart1.display();
    binPart2.display();
    binPart3.display(); 
    crumpledPaper.display();
      

    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(crumpledPaper.body,crumpledPaper.body.position,{x:74,y:-75});
    }
}

function mouseReleased()
{
    launcher.fly();
}
function mouseDragged()
{
    Matter.Body.setPosition(crumpledPaper.body,{x:mouseX,y:mouseY});
}

