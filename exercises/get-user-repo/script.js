// TODO
import FetchWrapper from "./fetch-wrapper.js";
import { startLoader, stopLoader } from "./helpers.js";
// TODO 1: select element from DOM
const GithubAPI = new FetchWrapper("https://api.github.com");
const formEl = document.querySelector("#repos-form");
const inputEl = document.querySelector("#github-username");
const submitEl = document.querySelector("#get-repos");
const listEl = document.querySelector("#repos-list");
// TODO 2: get REPO username from github
function getUserRepo(userName) {
  GithubAPI.get(`/users/${userName}/repos`)
    .then((data) => {
      // clear list before make request
      listEl.innerHTML = "";
      // check if data is present
      if (!data.error) {
        // display user repo to html
        data.forEach((repo) => {
          listEl.insertAdjacentHTML(
            "beforeend",
            `<li>
                <a href="${repo.html_url}" target="_blank">
                    <h2>${repo.full_name}</h2>
                    <p>${repo.description}</p>
                </a>
            </li>`
          );
        });
      }
    })
    .catch((error) => {
      // document.querySelector("h1").textContent = error;
      console.log(`Error! Status: ${error.Status}.`);
    })
    // release loading when done requesting data
    .finally(() => {
      stopLoader(submitEl);
      submitEl.textContent = "Get Repos";
    });
}
// TODO 3: send request repo with github username
formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  // set loading when requesting data
  startLoader(submitEl);
  // send request to API
  getUserRepo(inputEl.value);
});

// import { startLoader, stopLoader } from "./helpers.js";
// import FetchWrapper from "./fetch-wrapper.js";

// const GithubAPI = new FetchWrapper("https://api.github.com/");

// const form = document.querySelector("#repos-form");
// const username = document.querySelector("#github-username");
// const button = document.querySelector("#get-repos");
// const list = document.querySelector("#repos-list");

// form.addEventListener("submit", (event) => {
//   event.preventDefault();

//   startLoader(button);
//   GithubAPI.get(`users/${username.value}/repos`)
//     .then((data) => {
//       list.innerHTML = "";
//       console.log(data);
//       data.forEach((repo) => {
//         list.insertAdjacentHTML(
//           "beforeend",
//           `<li>
//                 <a href="${repo.html_url}" target="_blank">
//                     <h2>${repo.full_name}</h2>
//                     <p>${repo.description}</p>
//                 </a>
//             </li>`
//         );
//       });
//     })
//     .finally(() => {
//       stopLoader(button, "Get repos");
//     });
// });
