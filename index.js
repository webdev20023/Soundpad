window.addEventListener('keydown', playSound);
window.addEventListener('touchstart', playSound);
window.addEventListener('mouseover', playSound);

function playSound(e) {
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  } else if (e.type === 'touchstart') {
    const touch = e.touches[0];
    const keyElement = document.elementFromPoint(touch.clientX, touch.clientY);
    keyCode = keyElement.getAttribute('data-key');
  } else if (e.type === 'mouseover') {
    keyCode = e.target.getAttribute('data-key');
  }

  const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'box-shadow') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));







// window.addEventListener('keydown', playSound);
// window.addEventListener('touchstart', playSound);

// function playSound(e) {
//   let keyCode;
//   if (e.type === 'keydown') {
//     keyCode = e.keyCode;
//   } else if (e.type === 'touchstart') {
//     const touch = e.touches[0];
//     const keyElement = document.elementFromPoint(touch.clientX, touch.clientY);
//     keyCode = keyElement.getAttribute('data-key');
//   }

//   const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
//   const key = document.querySelector(`.key[data-key="${keyCode}"]`);
//   if (!audio) return;
//   audio.currentTime = 0;
//   audio.play();
//   key.classList.add('playing');
// }

// function removeTransition(e) {
//   if (e.propertyName !== 'box-shadow') return;
//   this.classList.remove('playing');
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));







// window.addEventListener('keydown', playSound);

// function playSound(e){
//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
//     const key = document.querySelector(`.key[data-key="${e.keyCode}]`);
//     if(!audio) return;
//     audio.currentTime = 0;
//     audio.play();
//     key.classList.add('playing');
// }

// function removeTransition(e){

//     if (e.propertyName !== 'box-shadow') return;
//     this.classList.remove('playing');
  
// }

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));