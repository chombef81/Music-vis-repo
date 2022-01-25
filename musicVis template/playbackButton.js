//displays and handles clicks on the playback button.
function PlaybackButton() {
  this.x = 20;
  this.y = 20;
  this.width = 20;
  this.height = 20;
  this.playbutton = createButton("Play");

  this.draw = function () {
    this.playbutton.position(this.x, this.y);
  };

  //flag to determine whether to play or pause after button click and
  //to determine which icon to draw
  this.playing = false;

  //checks for clicks on the button, starts or pauses playabck.
  //@returns true if clicked false otherwise.
  this.hitCheck = function () {
    if (sound.isPlaying()) {
      sound.pause();
    } else {
      sound.loop();
    }
    this.playing = !this.playing;
    return true;
  };
  return false;
}

//   if (sound.isPlaying()) {
//     sound.pause();
//   } else {
//     sound.loop();
//   }
//   this.playing = !this.playing;
//   return true;
// };
// return false;
