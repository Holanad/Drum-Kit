const notes = document.querySelectorAll('.note');
const audio = document.querySelectorAll('audio.audio-item');
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
        const musicItemElem = document.querySelectorAll('.music-item');
        btnAutoPlay.classList.add('disable');
        notesBlockElem.classList.add('disable');
        musicBlockElem.classList.add('disable');
        if(musicItemElem[0].classList.contains('active')){
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
            setTimeout(() => btnAutoPlay.classList.remove('disable'), 15000);
            setTimeout(() => notesBlockElem.classList.remove('disable'), 15000);
            setTimeout(() => musicBlockElem.classList.remove('disable'), 15000);
        } else {
            audio[0].play() && notes[0].classList.add('playing');
            setTimeout(() => audio[1].play() && notes[1].classList.add('playing'), 2100);
            setTimeout(() => audio[2].play() && notes[2].classList.add('playing'), 4000);
            setTimeout(() => audio[3].play() && notes[3].classList.add('playing'), 6100);
            setTimeout(() => audio[4].play() && notes[4].classList.add('playing'), 8000);
            setTimeout(() => audio[5].play() && notes[5].classList.add('playing'), 9900);
            setTimeout(() => audio[6].play() && notes[6].classList.add('playing'), 11900);
            setTimeout(() => audio[7].play() && notes[7].classList.add('playing'), 13900);
            setTimeout(() => audio[8].play() && notes[8].classList.add('playing'), 15900);
            setTimeout(() => audio[9].play() && notes[9].classList.add('playing'), 17800);
            setTimeout(() => btnAutoPlay.classList.remove('disable'), 19000);
            setTimeout(() => notesBlockElem.classList.remove('disable'), 19000);
            setTimeout(() => musicBlockElem.classList.remove('disable'), 19000);
        }
    });
}
function dataContent (){
    let valueTitle = document.querySelector('.music-block h1')
    let valueMusic = document.querySelector('.control')
    let musicActiveElem = document.querySelector('.active');
    let backgroundElem = document.querySelector('video');
    let audioElems = document.querySelectorAll("audio.audio-item");
    let soundTextElem = document.querySelectorAll(".sound");
    if(musicItemElems[1] === musicActiveElem){
        valueTitle.innerHTML = "Tiësto & Karol G - Don't Be Shy";
        valueMusic.setAttribute('src', 'assets/sound/tiesto.mp3');
        backgroundElem.setAttribute('src', 'assets/video/tiesto.mp4');
        audioElems[0].setAttribute('src', 'assets/sound/don/one.wav');
        audioElems[1].setAttribute('src', 'assets/sound/don/two.wav');
        audioElems[2].setAttribute('src', 'assets/sound/don/three.wav');
        audioElems[3].setAttribute('src', 'assets/sound/don/four.wav');
        audioElems[4].setAttribute('src', 'assets/sound/don/five.wav');
        audioElems[5].setAttribute('src', 'assets/sound/don/six.wav');
        audioElems[6].setAttribute('src', 'assets/sound/don/seven.wav');
        audioElems[7].setAttribute('src', 'assets/sound/don/eith.wav');
        audioElems[8].setAttribute('src', 'assets/sound/don/nine.wav');
        audioElems[9].setAttribute('src', 'assets/sound/don/ten.wav');
        soundTextElem.forEach(function (i) {
            i.style.display = "none";
        });    
    }
    if(musicItemElems[0] === musicActiveElem){
        valueTitle.innerHTML = 'Nessa Barrett - la di die (feat. jxdn)';
        valueMusic.setAttribute('src', 'assets/sound/nessa.mp3');
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
        });
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
autoPlayNessa ();
tabs();
mouseActive();
keydownActive();






