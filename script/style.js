const btnChangeEl = document.querySelector('.btn-change');
const btnCheckEl = document.querySelector('.btn-check');
const insertEl = document.querySelector('.insert-text');

btnChangeEl.addEventListener('click', event => {
  insertEl.textContent = 'Error';
})

btnCheckEl.addEventListener('click', function() {
  setTimeout(() => {
    if(insertEl.textContent === 'Error') {
      insertEl.style.display = 'none';
    } else {
      insertEl.style.color = 'red';
    }
  }, 100);
});

