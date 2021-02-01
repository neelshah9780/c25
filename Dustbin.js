class Box
{
  constructor(x,y,width,height,angle)
  {
    var options = { isStatic : 1.0 }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.image = loadImage("dustbingreen.png");
  }
   
  display()
  {
    var pos=this.body.position;
    var angle= this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    fill("blue");
    rect(0,0,this.width,this.height);
    pop();
  }
};