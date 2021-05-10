class createDrops{
    constructor(x, y){
        var options = {
            'friction':0.01,
            'restitution':0.1
        }

        this.radius = 5
        this.body = Bodies.circle(x, y, 3, options);
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y > height){
          Matter.Body.setPosition(this.body,{x:random(0, 500), y:0});
        }
    }
    
    display(){
        noStroke();
        fill(0,0,255);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.radius);
    }
}