class Drops
{
    constructor(x,y,r,options)
     {
        var options = 
        {
            isStatic:true,
            friction:0.1
        }
        this.body = Bodies.circle(x,y,5,options);
        this.animation = loadAnimation("images/WalkingFrame/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png");

        World.add(world ,this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.animation,0,0);
        pop();
    }
}