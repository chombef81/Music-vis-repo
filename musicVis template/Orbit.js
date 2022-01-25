class Orbit {
  constructor() {
    this.name = "orbit";

    //create the sun
    this.sun = function (mass, pos, vel) {
      this.mass = mass;
      this.pos = pos;
      this.vel = vel;
      this.rad = this.mass;
    };
    //updates the elements of the sun
    this.update = function () {
      noStroke();
      fill(255);
      ellipse(this.pos.x, this.pos.y, this.rad, this.rad);
    };
    //draws the objects on to the window
    this.draw = function () {
      translate(width / 2, height / 2);
      this.update(this.sun(100, createVector(0, 0), createVector(0, 0)));
    };
  }
}
