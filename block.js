class Block{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      //console.log(this.body.speed);
      var position = this.body.position;
      var angle = this.body.angle;
      push();
      if(this.body.speed < 2){
        translate(position.x, position.y);
        rotate(angle);
        fill("white");
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
      }else{
        World.remove(world, this.body);
        this.visibility = this.visibility-1;
        tint(255, this.visibility);
        //rect(position.x, position.y,50,50);
      }
      pop();
    }
}