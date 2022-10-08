import FetchWrapper from "./fetch-wrapper.js";
//TODO 1: query seletor the element
const formEl = document.querySelector("#todo-form");
const tittleEl = document.querySelector("#todo-title");
const categoryEl = document.querySelector("#todo-category");
const submitEl = document.querySelector("#button-add");
const listEl = document.querySelector("#todos-list");
const API = new FetchWrapper("https://api.learnjavascript.online/demo");

//TODO 2: get TODO from the API
const getTodos = function getTodos() {
  API.get("/todos").then((data) => {
    // clear the list every request
    listEl.innerHTML = "";
    data.todos.forEach((todo) => {
      listEl.insertAdjacentHTML(
        "beforeend",
        `<li><div class="card">[${todo.category}] ${todo.title}</div></li>`
      );
    });
  });
};

//TODO 3: send TODO to the API
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // set disabled when empty
  submitEl.setAttribute("disabled", "disabled");
  // send to the api
  API.put("/todos", {
    title: tittleEl.value,
    category: categoryEl.value,
  })
    .then((data) => {
      console.log(data);
      // check the todo contents if pass the requirement
      if (!data.error) {
        getTodos();
      }
    })
    // remove disabled button when all the condition passed
    .finally(() => {
      submitEl.removeAttribute("disabled");
    });
});
