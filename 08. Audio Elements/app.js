const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];


sounds.forEach(sound => {
  // Create button elements wih the elements from sounds array
  const btn = document.createElement('button');
  btn.classList.add('btn');

  // Populate inner text of each button with sounds elements
  btn.innerText = sound;

  // Play sound on btn click
  btn.addEventListener('click', () => {
    stopAudio();
    // select Audio element by sound id and play it
    document.getElementById(sound).play();
  })
  // Inserting them into HTML in the id='buttons' DIV
  document.getElementById('buttons').append(btn);
})


// audio elements dont have STOP, we need to pause and reset playtime to 0
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime
function stopAudio() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  })
}