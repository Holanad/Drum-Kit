const notes = document.querySelectorAll('.note');

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

function keydownActive (){
    window.addEventListener('keydown', playSound);    
}
function mouseActive (){
    notes.forEach((i) => {
        i.addEventListener('click', function (){
           const btn = i.dataset.key;
           const audios = document.querySelectorAll('audio');
           console.log(audios)
            /*audios.forEach((i) => {
                i
            });*/
            i.classList.add('playing');
        });
    });  
    
}
notes.forEach(note => note.addEventListener('transitionend', removeTransition));

mouseActive();
keydownActive();






