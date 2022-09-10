'use strict';
//using selectors inside the element

const questionsEl = document.querySelectorAll('.question');
questionsEl.forEach(questionEl => {
  const questionBtn = questionEl.querySelector('.question-btn');
  questionBtn.addEventListener('click', () => {
    questionsEl.forEach(item => {
      item !== questionEl ? item.classList.remove('show-text') : "";
    });
    questionEl.classList.toggle('show-text');
  })
})

// traversing the dom

// const btnsEl = document.querySelectorAll('.question-btn');

// btnsEl.forEach(btnEl => {
//   btnEl.addEventListener('click', (e) => {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle('show-text');
//   });
// })