document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {
    let input = document.querySelector('#input').value;

    if(input !== ''){
       let inputArray = input.split('');
       playComposition(inputArray);
    }

});

function playSound(sound) {
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);

    let audioElement = document.querySelector(`#s_${sound}`);

    if (audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');
        setTimeout(() => {
            keyElement.classList.remove('active');
        }, 300);
    }
}

function playComposition(inputArray) {
    let wait = 0;
    for (let inputSong of inputArray) {
        setTimeout(()=>{
            playSound(`key${inputSong}`);
        },wait);
         wait += 250;
    }
}