const notes = document.querySelectorAll('.note');
const audio = document.querySelectorAll('audio');
const btnAutoPlay = document.querySelector('.music-btn');
const musicItemElems = document.querySelectorAll('.music-item');
const musicItemElem = document.querySelector('.music-item');


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


function autoPlayNessa () {
    btnAutoPlay.addEventListener('click', function (){
        const notesBlockElem = document.querySelector('.notes');
        const musicBlockElem = document.querySelector('.music');
        btnAutoPlay.classList.add('disable');
        notesBlockElem.classList.add('disable');
        musicBlockElem.classList.add('disable');
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
        setTimeout(() => btnAutoPlay.classList.remove('disable'), 14200);
        setTimeout(() => notesBlockElem.classList.remove('disable'), 14200);
        setTimeout(() => musicBlockElem.classList.remove('disable'), 14200);
    });
}
function dataContent (){
    let valueTitle = document.querySelector('.music-block h1')
    let musicActiveElem = document.querySelector('.active');
    let backgroundElem = document.querySelector('video');
    let audioElems = document.querySelectorAll("audio");
    let soundTextElem = document.querySelectorAll(".sound");
    
    if(musicItemElems[0] === musicActiveElem){
        valueTitle.innerHTML = 'Nessa Barrett - la di die (feat. jxdn)';
        backgroundElem.setAttribute('src', 'assets/video/background.mp4');
        audioElems[0].setAttribute('src', 'assets/sound/nessa/one.wav');
        audioElems[1].setAttribute('src', 'assets/sound/nessa/two.wav');
        audioElems[2].setAttribute('src', 'assets/sound/nessa/three.wav');
        audioElems[3].setAttribute('src', 'assets/sound/nessa/four.wav');
        audioElems[4].setAttribute('src', 'assets/sound/nessa/five.wav');
        audioElems[5].setAttribute('src', 'assets/sound/nessa/six.wav');
        audioElems[6].setAttribute('src', 'assets/sound/nessa/seven.wav');
        audioElems[7].setAttribute('src', 'assets/sound/nessa/eith.wav');
        audioElems[8].setAttribute('src', 'assets/sound/nessa/nine.wav');
        audioElems[9].setAttribute('src', 'assets/sound/nessa/ten.wav');
        soundTextElem.forEach(function (i) {
            i.style.display = "block";
        })
        
        autoPlayNessa ();
    }
    if(musicItemElems[1] === musicActiveElem){
        valueTitle.innerHTML = 'Don Diablo - On my Mind';
        backgroundElem.setAttribute('src', 'assets/video/dondiablo.mp4');
        audioElems[0].setAttribute('src', 'assets/sound/don/11.wav');
        soundTextElem.forEach(function (i) {
            i.style.display = "none";
        })
    }
}
function tabs() {
    musicItemElems.forEach((i) => {
        i.addEventListener('click', function (){
            if(!this.classList.contains('active')){
                const musicItemActiveElem = document.querySelector('.music-item.active');
                musicItemActiveElem.classList.remove('active');
                i.classList.add('active');
                dataContent();
            }
        })
    });
}
tabs();
mouseActive();
keydownActive();






