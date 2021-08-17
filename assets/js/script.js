function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const note = document.querySelector(`.note[data-key="${e.keyCode}"]`);
    if(!audio) return;
    note.classList.add('playing');
    audio.play();
}
function removeTransition(e){
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}
const notes = document.querySelectorAll('.note');
notes.forEach(note => note.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);



