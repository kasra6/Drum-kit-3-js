function playSound(evt){
  const sound = document.querySelector(`audio[data-key="${evt.keyCode}"]`);
  if (!sound) return //get out of function if the pressed key is not specific
  const key = document.querySelector(`kbd[data-key="${evt.keyCode}"]`);
  key.classList.add("playing");
  sound.currentTime = 0;
  sound.play();
  key.addEventListener('transitionend', function(evt){
    if (evt.propertyName !== 'transform') return;
    key.classList.remove("playing");
  })
}

window.addEventListener('keydown', playSound);
