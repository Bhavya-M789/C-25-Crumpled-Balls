class paper { 
    constructor(x, y, radius){
        var options = {
            restitution: 0.3, 
            friction: 0.5, 
            density: 1.2, 
            isStatic: false
        }
        this.radius = radius; 
        this.x = x;
        this.y = y;
        this.image = loadImage("paper.png");
        this.body = Bodies.circle(x, y, (this.radius-20)/2, options);
        World.add(world, this.body);
    }
    display(){
        var pose = this.body.position;
        push ();
        translate (pose.x, pose.y);
        imageMode (CENTER);
        image (this.image, 0, 0, this.radius, this.radius);
        pop ();
    }
}
