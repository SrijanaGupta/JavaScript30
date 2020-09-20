window.addEventListener('keydown',function(e){
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) {return;} //to stop function from running further unnecessarily..
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    //console.log('Global event listener this - ',this);
});
    //console.log('Global this - ',this);

    function removeTransition(e){
        if(e.propertyName != 'transform')
         return;
        // console.log('method associated this - ',this);
         this.classList.remove('playing'); //here this is 'key'. this is reference to the property on which a method is being called (method in which we are accessing this)
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend',removeTransition));
