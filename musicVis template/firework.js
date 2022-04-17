class Firework {
  constructor() {
    //sets the colour for the partical and the fireoworks to ramdom.
    this.colour = color(random(0, 255), random(0, 255), random(0, 255));
    this.firework = new Partical(random(width), height, this.colour, true);
    this.exploded = false;
    this.particals = [];

    //the explosion effect creats maultiple (80) particals to the screen.
    this.explode = function () {
      for (let i = 0; i < 80; i++) {
        let fire = new Partical(
          this.firework.pos.x,
          this.firework.pos.y,
          this.colour,
          false
        );
        //the new partical (fire) are pushed to the particals array.
        this.particals.push(fire);
      }
    };

    //check to see if partical has exploded. If not it continues to run the applyForce function from the partical class.
    //As well as the update fuction, showing only one partical moving up on the screen.
    this.update = function () {
      if (!this.exploded) {
        this.firework.applyForce();
        this.firework.update();
        //check to see if the partical velocity is greater that 0 (as the vel going up the screen is negitive).
        //Once velocity is 0 the explositon fuction is called and set to true.
        if (this.firework.vel.y > 0) {
          this.exploded = true;
          this.explode();
        }
      }
      //the loop counts backwards in order to controle the length my removing a partical from the front and adding one to the back.
      for (let i = this.particals.length - 1; i >= 0; i--) {
        this.particals[i].applyForce();
        this.particals[i].update();
        if (this.particals[i].done()) {
          this.particals.splice(i, 1);
        }
      }
    };

    //check to see if the exploded function is complete and that the particals array is zero then returns true if both conditions are met.
    this.done = function () {
      if (this.exploded && this.particals.length == 0) {
        return true;
      } else {
        return false;
      }
    };

    this.show = function () {
      //shows the exploded particals
      if (!this.exploded) {
        this.firework.show();
      }
      for (let i = this.particals.length - 1; i >= 0; i--) {
        this.particals[i].show();
      }
    };
  }
}
