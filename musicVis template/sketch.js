//global for the controls and input
let controls = null;
//store visualisations in a container
let vis = null;
//variable for the p5 sound object
let sound = null;
//variable for p5 fast fourier transform
let fourier;

let font = null;

function preload() {
  soundFormats("mp3", "wav");
  sound = loadSound("assets/on-a-journey.mp3");
  font = loadFont("assets/AlfaSlabOne-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  controls = new ControlsAndInput();

  //instantiate the fft object
  fourier = new p5.FFT();

  //create a new visualisation container and add visualisations
  vis = new Visualisations();
  vis.add(new Spectrum());
  vis.add(new WavePattern());
  vis.add(new Needles());
  vis.add(new Orbit());
  vis.add(new Fireworks());
}

function draw() {
  background(0);
  //draw the selected visualisation
  vis.selectedVisual.draw();
  //draw the controls on top.
  controls.draw();
}

function mouseClicked() {
  controls.mousePressed(controls.playbackButton.hitCheck());
}

function keyPressed() {
  controls.keyPressed(keyCode);
}

//when the window has been resized. Resize canvas to fit
//if the visualisation needs to be resized call its onResize method
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  if (vis.selectedVisual.hasOwnProperty("onResize")) {
    vis.selectedVisual.onResize();
  }
}
