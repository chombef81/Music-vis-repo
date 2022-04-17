//displays and handles clicks on the playback button.
function PlaybackButton() {
  this.x = 20;
  this.y = 20;
  this.width = 50;
  this.height = 30;

  //flag to determine whether to play or pause after button click and
  //to determine which icon to draw
  this.playing = false;

  //create a play button and style it using CSS styling in p5.js
  this.button = createButton("&#9658");
  this.button.position(this.x, this.y);
  this.button.style(
    "border: none; color: white; background-color: rgb(247, 189, 12); padding-left: 15px; padding-right: 15px; padding-top: 5px; padding-bottom: 5px"
  );
  this.button.style("font-size: 20px; border-radius: 18px");

  //checks for clicks on the button, starts or pauses playabck.
  //@returns true if clicked false otherwise.
  this.hitCheck = function () {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.width &&
      mouseY > this.y &&
      mouseY < this.y + this.height
    ) {
      if (sound.isPlaying()) {
        sound.pause();
      } else {
        sound.loop();
      }
      this.playing = !this.playing;
      return true;
    }
    return false;
  };
}
