class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visibility=255;
    
    World.add(world, this.body);
  }
 
display(){
  console.log(this.body.speed);
  if(this.body.speed<7){
    var pos =this.body.position;
    var angle=this.body.angle;
    push(); 
    translate(pos.x,pos.y);
    rotate(angle); 
    rectMode(CENTER);
    fill("chartreuse");
    rect(0,0, this.width, this.height);
    pop();
  }
  else{
    World.remove(world,this.body);
    push();
    this.Visibility=this.Visibility-5;
    tint(255,this.Visibility);
    //image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}}