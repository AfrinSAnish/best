class Drops{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.1,
            friction:0.1
        }
       this.body =  Bodies.circle(x,y,5,options)
       World.add(world,this.body)
    } 
    display(){
        var Pos=this.body.position;

        push()
        translate(Pos.x,Pos.y)
        ellipseMode(RADIUS)
        fill("#add8e6");
        ellipse(0,0,10,10)
        pop()
    }
    
    update(){
            if(this.body.position.y>height){
                Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
            }
}
}