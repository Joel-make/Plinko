class Particle{
    constructor() {
        var options = {
              isStatic:false ,
              restitution:0.8,
              friction:0.1  
        }
        this.body = Bodies.circle(400,50,10,options);
        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
        //this.image=loadImage("box1.PNG");
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        //image(this.image,0,0,this.width, this.height);
        fill(this.color)
        ellipseMode(CENTER);
        ellipse(0,0,10,10);
        pop();
      }
}
