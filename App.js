window.addEventListener('keyup',(e)=>{
    // console.log(e.keyCode);
    const audioKey = document.querySelector(`audio[data-key='${e.keyCode}']`)
    const divKey = document.querySelector(`.key[data-key='${e.keyCode}']`)
    // console.log(audioKey);
    if(!audioKey) return;
    audioKey.currentTime = 0;
    audioKey.play();
    divKey.classList.add('play');
})

const keys = document.querySelectorAll('.key');

function removeTransition(e)
{
    if(e.propertyName !== 'transform') return;

    this.classList.remove('play');
}

keys.forEach(key => key.addEventListener('transitionend',removeTransition));
// console.log(keys);