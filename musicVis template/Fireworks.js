class Fireworks {
  constructor() {
    this.name = "fireworks";

    //create a fireworks array.
    this.fireworks = [];
    stroke(255);
    strokeWeight(8);

    //draw the fireworks to the screen
    this.draw = function () {
      //call the bass element of the FFT and map it so that it has a 10% random change of genarating
      //the fireworks. Then push the fireworks into the array.
      let spectrum = fourier.analyze();
      let b = fourier.getEnergy("bass");
      let highMid = map(b, 0, 255, 0, 0.1);
      if (random(1) < highMid) {
        this.fireworks.push(new Firework());
      }
      //count the fireworks array backwards and splice it in order to control
      //the number of fireworks genarated.
      for (let i = this.fireworks.length - 1; i >= 0; i--) {
        this.fireworks[i].update();
        this.fireworks[i].show();
        if (this.fireworks[i].done()) {
          this.fireworks.splice(i, 1);
        }
      }
    };
  }
}
