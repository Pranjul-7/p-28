class slingShot
{
    constructor(bodyA,PointB)
    {
        var options = 
        {
            bodyA : bodyA ,
            pointB : PointB,
            stiffness : 0.04,
            length : 10
        }
        this.sling = Const.create(options);
        this.PointB = PointB
        World.add(world,this.sling);
    }
    fly()
    {
    this.sling.bodyA=null;
    }
    display()
    {
        var pointA = this.sling.bodyA.position;
        var pointB = this.PointB;
        strokeColor("red");       
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }

}