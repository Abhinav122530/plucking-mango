class launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.launcher= Constraint.create(options);
        World.add(world, this.launcher);

        this.image1=loadImage("sprites/boy.png");
        

    }

    fly(){
        this.launcher.bodyA = null;
    }
    display(){
if(this.launcher.bodyA){
push();
strokeWeight(6)
stroke("green");
line(this.launcher.bodyA.position.x,this.launcher.bodyA.position.y,this.pointB.x,this.pointB.y)

pop();


}







    }
}

