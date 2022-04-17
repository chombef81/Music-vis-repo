class Orbit {
  constructor() {
    this.name = "orbit";

    //proparies of the entity to be used for sun and planets.
    this.radius;
    this.ang = random(180);
    this.distance;
    this.angle;
    this.orbitSpeed = 1;
    this.planetSep = 70;
    this.amplitude = new p5.Amplitude();
    this.a;
    this.d;

    //create a single entity from wich to build.
    this.entity = function (r, d) {
      this.radius = r;
      this.distance = d;
    };

    //create half the outer circle which will react to the FFT.
    this.circle1 = function () {
      push();
      strokeWeight(3);
      stroke(255, 215, 0);
      fill(255, 255, 255, 100);
      //use the fourier for the FFT already created
      let wave = fourier.waveform();
      beginShape();
      for (let i = 0; i <= 180; i++) {
        let index = floor(map(i, 0, 180, 0, wave.length - 1));
        let rad = map(wave[index], -1, 1, 475, 375);
        let x = rad * sin(i);
        let y = rad * cos(i);
        vertex(x, y);
      }
      endShape();
      pop();
    };

    //create the second half that reactos to the FFT.
    this.circle2 = function () {
      push();
      strokeWeight(3);
      stroke(255, 215, 0);
      noFill();
      let wave = fourier.waveform();
      beginShape();
      for (let i = 0; i <= 180; i++) {
        let index = floor(map(i, 0, 180, 0, wave.length - 1));
        let rad = map(wave[index], -1, 1, 475, 375);
        let x = -rad * sin(i);
        let y = rad * cos(i);
        vertex(x, y);
      }
      endShape();
      pop();
    };

    //updates the elements the entity with element from the sun
    this.update = function () {
      push();

      rotate(this.ang);
      translate(this.distance, 0);
      noStroke();
      ellipse(0, 0, this.radius * 2, this.radius * 2);

      pop();
    };

    //updates the entity with elemnts for the planets rotating round the sun.
    this.update2 = function () {
      push();
      rotate(this.ang);
      translate(this.distance, 0);
      noStroke();
      ellipse(0, 0, this.radius * 2, this.radius * 2);
      pop();
    };

    //creates the sun (center object) and updates it with elements for gravitly from the update function.
    //this then reacts to the amplitude and uses the gravity to make the planets react as well.
    this.sun = function () {
      this.a = this.amplitude.getLevel();
      this.d = map(this.a, 0, 0.15, 5, 10);
      fill(255, 215, 0);
      this.update(this.entity(this.d, 0));
    };

    //function to make the planets orbit round the sun.
    this.move = function () {
      this.ang += this.orbitSpeed;
    };

    //fuction to create the first 5 planets.
    this.planet1 = function () {
      fill(0, 255, 0);
      this.update(this.entity(10, 40 + this.d));
      fill(220, 20, 60);
      this.update(this.entity(20, 100 + this.d));
      fill(0, 255, 255);
      this.update(this.entity(15, 160 + this.d));
      fill(138, 43, 226);
      this.update(this.entity(30, 220 + this.d));
      fill(0, 0, 255);
      this.update(this.entity(35, 320 + this.d));
    };

    //function to create the next 5 planets
    this.planet2 = function () {
      fill(0, 255, 0);
      this.update2(this.entity(10, -50 - this.d));
      fill(220, 20, 60);
      this.update2(this.entity(20, -100 - this.d));
      fill(0, 255, 255);
      this.update2(this.entity(15, -160 - this.d));
      fill(138, 43, 226);
      this.update2(this.entity(30, -220 - this.d));
      fill(0, 0, 255);
      this.update2(this.entity(35, -320 - this.d));
    };

    //draws the objects on to the window
    this.draw = function () {
      angleMode(DEGREES);
      push();

      translate(width / 2, height / 2);
      this.circle1();
      this.circle2();
      // draws the sun
      this.sun();
      this.planet1();
      this.planet2();
      this.move();
      pop();
    };
  }
}
