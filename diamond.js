class Diamond {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.8,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 10, 10, options);
      this.width = 10;
      this.height = 10;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.X = mouseX;
      pos.Y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("lightblue");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };