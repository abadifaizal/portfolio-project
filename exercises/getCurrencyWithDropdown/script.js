import FetchWrapper from "./fetch-wrapper.js";

// =================== Cara 1 pake free exchange rate API dari europe bank ================

// const API = new FetchWrapper("https://api.frankfurter.app");

// // TODO 1: select all the element
// const baseCurrency = document.querySelector("#base-currency");
// const targetCurrency = document.querySelector("#target-currency");
// const result = document.querySelector("#conversion-result");

// // TODO 2: write request function
// function getExchangeRate() {
//   const baseVal = baseCurrency.value;
//   const targetVal = targetCurrency.value;
//   API.get(`/latest?amount=1&from=${baseVal}&to=${targetVal}`)
//     .then((data) => {
//       result.textContent = data.rates?.[targetVal];
//     })
//     .catch((error) => {
//       result.innerHTML = "1";
//     });
// }

// // TODO 3: validate the selected currency
// baseCurrency.addEventListener("change", getExchangeRate);
// targetCurrency.addEventListener("change", getExchangeRate);

// =================== Cara 2 pake free exchange rate API dari source yang di kasih ================

const API = new FetchWrapper(
  "https://v6.exchangerate-api.com/v6/431a0b601a1b9eab99694568"
);
// TODO 1: select all the element
const baseCurrency = document.querySelector("#base-currency");
const targetCurrency = document.querySelector("#target-currency");
const result = document.querySelector("#conversion-result");

// TODO 2: write request function
function getExchangeRate() {
  API.get(`/latest/${baseCurrency.value}`)
    .then((data) => {
      // console.log(data);
      result.textContent = data.conversion_rates[targetCurrency.value];
    })
    .catch((error) => {
      result.innerHTML = "1";
      console.log(error);
    });
}

// TODO 3: validate the selected currency
baseCurrency.addEventListener("change", getExchangeRate);
targetCurrency.addEventListener("change", getExchangeRate);
