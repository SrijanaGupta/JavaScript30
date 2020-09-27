const eachPanel = document.querySelectorAll('.panel');
console.log(eachPanel);

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e);
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
}
eachPanel.forEach(panel=> panel.addEventListener('click',toggleOpen));
eachPanel.forEach(panel=> panel.addEventListener('transitionend',toggleActive));

