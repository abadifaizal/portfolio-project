// ****** SELECT ITEMS **********
const alertEl = document.querySelector('.alert');
const formEl = document.querySelector('.grocery-form');
const groceryEl = document.querySelector('#grocery');
const submitBtnEl = document.querySelector('.submit-btn');
const containerEl = document.querySelector('.grocery-container');
const listEl = document.querySelector('.grocery-list');
const clearBtnEl = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlg = false;
let editID = "";

// ****** EVENT LISTENERS **********
// submit form
formEl.addEventListener('submit', addItem);
// clear items
clearBtnEl.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = groceryEl.value;
  const id = new Date().getTime().toString();

  if (value && !editFlg) {
    const element = document.createElement('article');
    // add class
    element.classList.add('grocery-item');
    // add id
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);
    element.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;
    const deleteBtnEl = element.querySelector('.delete-btn');
    const editBtnEl = element.querySelector('.edit-btn');
    deleteBtnEl.addEventListener('click', deleteItem);
    editBtnEl.addEventListener('click', editItem);
    // append to the list
    listEl.appendChild(element);
    // display alert
    displayAlert('item added to the list', 'success');
    // show container
    containerEl.classList.add('show-container');
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlg) {
    editElement.innerHTML = value;
    displayAlert('value changed', 'success');
    setBackToDefault();
  } else {
    displayAlert('please enter value', 'danger');
  }
}

// Display alert
function displayAlert(text, action) {
  alertEl.textContent = text;
  alertEl.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(() => {
    alertEl.textContent = '';
    alertEl.classList.remove(`alert-${action}`);
  }, 1000);
}
// clear items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach(item => {
      listEl.removeChild(item);
    });
  }
  containerEl.classList.remove('show-container');
  displayAlert('empty list', 'danger');
  setBackToDefault();
  // localStorage.removeItem('list');
}
// delete item
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  listEl.removeChild(element);
  if (listEl.children.length === 0) {
    containerEl.classList.remove('show-container');
  }
  displayAlert('item removed', 'danger');
  setBackToDefault();
  // remove from local storage by id
  // removeFromLocalStorage(id);
}
// edit item
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  // set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;
  // set form value
  groceryEl.value = editElement.innerHTML;
  editFlg = true;
  editID = element.dataset.id;
  submitBtnEl.textContent = 'edit';
}
// set back to default
function setBackToDefault() {
  console.log('set back to default');
  groceryEl.value = "";
  editFlg = false;
  editID = '';
  submitBtnEl.textContent = 'submit';
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log('added to local storage');
}
function removeFromLocalStorage(id) {

}
// ****** SETUP ITEMS **********
