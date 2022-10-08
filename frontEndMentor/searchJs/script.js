import { data } from "./data.js";

// visualize one of the items in `data` (feel free to remove the next line)
// console.log(data[0]);

// TODO: implement instant search
const searchEl = document.querySelector("#app-search");
const results = document.querySelector("#results-list");

const render = (query = "") => {
  const cleanedupQuery = query.trim().toLowerCase();
  const filtered = data.filter((item) =>
    item.spacecraft.toLowerCase().includes(cleanedupQuery)
  );

  filtered.forEach((item) => {
    results.insertAdjacentHTML("beforeend", `<li>${item.spacecraft}</li>`);
  });
};

searchEl.addEventListener("keyup", (event) => {
  results.innerHTML = "";
  render(searchEl.value);
});

render();
