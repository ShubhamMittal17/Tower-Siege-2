const Body = Matter.Body;
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,ground2,blox,polygon,img;
function preload(){
img=loadImage("images.png");
}
function setup() {
  engine = Engine.create();
    world = engine.world;

  createCanvas(1200,600);
ground=new Ground(600,400,250,20);
ground2=new Ground(1000,300,250,20);
ground3=new Ground(width/2,600,width,10);
ground4=new Ground(1200,height/2,10,height);
blox=new Box(495,320,30,40);
blox2=new Box(525,320,30,40);
blox3=new Box(555,320,30,40);
blox4=new Box(585,320,30,40);
blox5=new Box(615,320,30,40);
blox6=new Box(645,320,30,40);
blox7=new Box(675,320,30,40);
blox8=new Box(705,320,30,40);
blox9=new Box2(525,280,30,40);
blox10=new Box2(555,280,30,40);
blox11=new Box2(585,280,30,40);
blox12=new Box2(615,280,30,40);
blox13=new Box2(645,280,30,40);
blox14=new Box2(675,280,30,40);
blox15=new Box3(555,240,30,40);
blox16=new Box3(585,240,30,40);
blox17=new Box3(615,240,30,40);
blox18=new Box3(645,240,30,40);
blox19=new Box4(585,200,30,40);
blox20=new Box4(615,200,30,40);


bloox=new Box(895,220,30,40);
bloox2=new Box(925,220,30,40);
bloox3=new Box(955,220,30,40);
bloox4=new Box(985,220,30,40);
bloox5=new Box(1015,220,30,40);
bloox6=new Box(1045,220,30,40);
bloox7=new Box(1075,220,30,40);
bloox8=new Box(1105,220,30,40);
bloox9=new Box2(925,180,30,40);
bloox10=new Box2(955,180,30,40);
bloox11=new Box2(985,180,30,40);
bloox12=new Box2(1015,180,30,40);
bloox13=new Box2(1045,180,30,40);
bloox14=new Box2(1075,180,30,40);
bloox15=new Box3(955,140,30,40);
bloox16=new Box3(985,140,30,40);
bloox17=new Box3(1015,140,30,40);
bloox18=new Box3(1045,140,30,40);
bloox19=new Box4(985,100,30,40);
bloox20=new Box4(1015,100,30,40);

polygon=new stone(50,200,30);
//World.add(world,this.polygon);
sling=new launcher(polygon.body,{x:100,y:200});
}


function draw() {
  Engine.update(engine);
  background("black");  
  imageMode(CENTER);
  //image(img,polygon.position.x,polygon.position.y,40,40);
  ground.display();
  ground2.display();
  blox.display();
  blox2.display();
  blox3.display();
  blox4.display();
  blox5.display();
  blox6.display();
  blox7.display();
  blox8.display();
  blox9.display();
  blox10.display();
  blox11.display();
  blox12.display();
  blox13.display();
  blox14.display();
  blox15.display();
  blox16.display();
  blox17.display();
  blox18.display();
  blox19.display();
  blox20.display();

  bloox.display();
  bloox2.display();
  bloox3.display();
  bloox4.display();
  bloox5.display();
  bloox6.display();
  bloox7.display();
  bloox8.display();
  bloox9.display();
  bloox10.display();
  bloox11.display();
  bloox12.display();
  bloox13.display();
  bloox14.display();
  bloox15.display();
  bloox16.display();
  bloox17.display();
  bloox18.display();
  bloox19.display();
  bloox20.display();
  polygon.display();
  drawSprites();
}
function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}


function mouseReleased(){
  sling.fly();
 
}
function keyPressed(){
  if(keyCode===32 && polygon.body.speed<50){
     // polygon.trajectory=[];
      Matter.Body.setPosition(polygon.body,{x:100,y:200});
      sling.attach(polygon.body);
     // gameState="onSling"
  }}