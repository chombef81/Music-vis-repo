//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput() {
  //playback button displayed in the top left of the screen
  this.playbackButton = new PlaybackButton();

  //responds to keyboard presses
  //@param keycode the ascii code of the keypressed
  this.keyPressed = function (keycode) {
    console.log(keycode);
    if (keycode == 32) {
      this.menuDisplayed = !this.menuDisplayed;
    }

    if (keycode > 48 && keycode < 58) {
      var visNumber = keycode - 49;
      vis.selectVisual(vis.visuals[visNumber].name);
    }
  };

  //draws the playback button and potentially the menu
  this.draw = function () {
    push();
    fill("white");
    stroke("black");
    strokeWeight(2);
    textSize(34);

    //playback button
    this.playbackButton.draw();
    //only draw the menu if menu displayed is set to true.
    if (this.menuDisplayed) {
      text("Select a visualisation:", 100, 30);
      this.menu();
    }
    pop();
  };

  this.menu = function () {
    //draw out menu items for each visualisation
    text("Key 1 for spectrum", 445, 30);
    text("Key 2 for wavepattern", 445, 60);
    text("Key 3 for needles", 445, 90);
    text("key 4 for orbit", 445, 120);
    //???
  };
}
