window.addEventListener('keydown',function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) {return;} //to stop function from running further unnecessarily..
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

    function removeTransition(e){
        console.log(e);
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitioned',removeTransition));

});