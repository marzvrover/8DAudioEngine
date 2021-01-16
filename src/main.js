// First we must get the audio playing
// Next we must make the audio rotate around head
// Next we must make the audio user selectable

const {Howl, Howler} = require('howler');

var sound = new Howl({
  src: ['resources/music.mp3']
});

sound.play();
