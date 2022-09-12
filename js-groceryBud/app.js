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
// load items
window.addEventListener('DOMContentLoaded', setupItems);

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault();
  const value = groceryEl.value;
  const id = new Date().getTime().toString();

  if (value && !editFlg) {
    createListItem(id, value);
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
    // edit local storage
    editLocalStorage(editID, value);
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
  localStorage.removeItem('list');
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
  removeFromLocalStorage(id);
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
  groceryEl.value = "";
  editFlg = false;
  editID = '';
  submitBtnEl.textContent = 'submit';
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(item => {
    if (item.id !== id) {
      return item;
    }
  })
  localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(item => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  })
  localStorage.setItem('list', JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) : [];
}
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach(item => {
      createListItem(item.id, item.value);
    })
    containerEl.classList.add('show-container');
  }
}

function createListItem(id, value) {
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
}