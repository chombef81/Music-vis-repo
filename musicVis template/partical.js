class Partical {
  //partical constructor with 4 arguments.
  constructor(x, y, colour, fire) {
    //proparties of the partical
    this.colour = colour;
    this.firework = true;
    this.lifetime = 255;
    let spectrum = fourier.analyze();
    //calling lowMid to use for hight of partical (firework)
    let l = fourier.getEnergy("lowMid");
    //mapping lowMid in rage so that firwork does not go off screen.
    this.lowMid = map(l, 0, 255, 2, 10);
    //calling treble to use for scutter of particals (fireworks) after explode function is called
    let t = fourier.getEnergy("treble");
    //mapping the vector multipler of the treble to between 2 and 10.
    this.treble = map(t, 0, 255, 2, 10);
    this.pos = createVector(x, y);
    //as the y cordinate of the vector is negitive I had to multiple the lowMid value by to turn it negitive.
    if (fire) {
      this.vel = createVector(0, random(-12, -1 * this.lowMid));
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(random(1, this.treble));
    }
    this.acc = createVector(0, 0);
    this.gravity = createVector(0, 0.1);

    //created gravity to act against the partical once it has reached its max hight.
    this.applyForce = function () {
      this.acc.add(this.gravity);
    };

    this.update = function () {
      if (!this.firework) {
        this.vel.mult(0.9);
      }
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.acc.mult(0);
    };
    //checks to see that the lifetime of the partical is under 0.
    this.done = function () {
      if (this.lifetime < 0) {
        return true;
      } else {
        return false;
      }
    };

    this.show = function () {
      //reduces the lifetime of the partical by 3.
      this.lifetime -= 3;
      //the partical will show on screen till the alpha is deplited.
      //hence the color slowly fades.
      if (!this.firework) {
        stokeWeight(4);
        stroke(colour, this.lifetime);
      } else {
        strokeWeight(6);
        stroke(colour);
      }
      //draws the inital partical.
      point(this.pos.x, this.pos.y);
    };
  }
}
