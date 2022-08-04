// create the eventListener
window.addEventListener('keydown', playSound)

function playSound(e) {
    // get the audio & key elements with attribute value equal to e.keyCode
    // (the keyCode value of the key that was pressed)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    
    if (!audio) return; // stop the function if keyCode doesn't exist
    
    audio.currentTime = 0; // restart the sound each time keydown is activated
    audio.play();
    
    key.classList.add('playing'); // add the styling/animation CSS class
}

// get all "keys" elements
const keys = document.querySelectorAll('.key');

// create an eventListener for each "key" element
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// remove the "playing" class when the transition has ended.
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}