function Spectrum() {
  this.name = "spectrum";

  this.draw = function () {
    push();
    var spectrum = fourier.analyze();
    noStroke();

    // fill(r, 255, 0);
    for (var i = 0; i < spectrum.length; i++) {
      var y = map(i, 0, spectrum.length, 0, height);
      var w = map(spectrum[i], 255, 0, width, 0);
      var r = map(i, 0, width, 255, 0);
      var g = map(i, 0, width, 0, 255);
      fill(r, g, 0);
      rect(0, y, w, height / spectrum.length);
    }

    pop();
  };
}
