const notes = document.querySelectorAll('.note');
const audio = document.querySelectorAll('audio');
const btnAutoPlay = document.querySelector('.music-btn');

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
            audio.forEach((i) => {
                const itemKey = i.dataset.key;
                if(btn === itemKey){
                    i.play();    
                }
            });
            i.classList.add('playing');
        });
    });  
}
notes.forEach(note => note.addEventListener('transitionend', removeTransition));


function autoPlay () {
    btnAutoPlay.addEventListener('click', function (){
        btnAutoPlay.classList.add('disable')
        audio[0].play() && notes[0].classList.add('playing');
        setTimeout(() => audio[1].play() && notes[1].classList.add('playing'), 1346);
        setTimeout(() => audio[2].play() && notes[2].classList.add('playing'), 3490);
        setTimeout(() => audio[3].play() && notes[3].classList.add('playing'), 4600);
        setTimeout(() => audio[4].play() && notes[4].classList.add('playing'), 6100);
        setTimeout(() => audio[5].play() && notes[5].classList.add('playing'), 7400);
        setTimeout(() => audio[6].play() && notes[6].classList.add('playing'), 9200);
        setTimeout(() => audio[7].play() && notes[7].classList.add('playing'), 10320);
        setTimeout(() => audio[8].play() && notes[8].classList.add('playing'), 11800);
        setTimeout(() => audio[9].play() && notes[9].classList.add('playing'), 13200);
        setTimeout(() => btnAutoPlay.classList.remove('disable'), 13200);
        
    });
}

autoPlay ();
mouseActive();
keydownActive();






