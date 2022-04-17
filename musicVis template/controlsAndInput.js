//Constructor function to handle the onscreen menu, keyboard and mouse
//controls
function ControlsAndInput() {
  this.menuDisplayed = false;

  //create a drop down list box.
  this.sel = createSelect();
  this.sel.position(90, 23);
  this.sel.style(
    "font-style: Arial; font-size: 20px; background-color: rgb(247, 189, 12); border: non;border-radius: 5px"
  );
  this.sel.style("color: white");

  //makes an option that can not be selected.
  this.sel.option("-- choose a visual --");
  this.sel.disable("-- choose a visual --");
  this.sel.selected("-- choose a visual --");

  //visual options
  this.sel.option("Spectrum");
  this.sel.option("Waveparttern");
  this.sel.option("Needles");
  this.sel.option("Orbit");
  this.sel.option("Fireworks");

  //playback button displayed in the top left of the screen
  this.playbackButton = new PlaybackButton();

  //make the window fullscreen or revert to windowed
  this.mousePressed = function () {
    //???
    //check if the playback button has been clicked
    //if not make the visualisation fullscreen
  };

  //draws the playback button and potentially the menu
  this.draw = function () {
    push();
    fill("white");
    stroke("black");
    strokeWeight(2);
    textSize(34);

    //visual options from drop down list.
    let item = this.sel.value();
    if (item == "Spectrum") {
      visNumber = 0;
      vis.selectVisual(vis.visuals[visNumber].name);
    } else if (item == "Waveparttern") {
      visNumber = 1;
      vis.selectVisual(vis.visuals[visNumber].name);
    } else if (item == "Needles") {
      visNumber = 2;
      vis.selectVisual(vis.visuals[visNumber].name);
    } else if (item == "Orbit") {
      visNumber = 3;
      vis.selectVisual(vis.visuals[visNumber].name);
    } else if (item == "Fireworks") {
      visNumber = 4;
      vis.selectVisual(vis.visuals[visNumber].name);
    }
    pop();
  };
}
