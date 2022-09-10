'use strict';

let count = 0;
const value = document.querySelector('#value');
const btnsEl = document.querySelectorAll('.btn');

btnsEl.forEach(btnEl => {
  btnEl.addEventListener('click', function(e) {
    const btnClass = e.currentTarget.classList;
    // if(btnClass.contains('decrease')) {
    //   count--;
    // } else if(btnClass.contains('increase')) {
    //   count++;
    // } else {
    //   count = 0;
    // }
    // check the btn className and make counter
    btnClass.contains('decrease') ? count-- : btnClass.contains('increase') ? count++ : count = 0;
    value.textContent = count;
    // change color based on the value
    count === 0 ? value.style.color = "black" : count > 0 ? value.style.color = "green" : value.style.color = "red";
  })
})