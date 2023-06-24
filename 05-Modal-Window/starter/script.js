'use strict';
const showModalBtns = document.querySelectorAll('.show-modal');
// query selector all returns a nodelist
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
// event === frist arg of addeventlistener  event handler === 2nd arg of ael
// class list (property) ==== class names in a node
// showModalBtn1.addEventListener('click', function () {
//   modal.classList.remove('hidden');
//   overlay.classList.remove('hidden');
// });

// init part of for loop - executed only once
// increment / decement
// conditional//determines execution of code block
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const showModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', showModal);
}
closeModalBtn.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// function greeter(){
//   console.log("hello");
// }
// greeter()