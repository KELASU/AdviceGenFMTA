const dice = document.querySelector(".dice");
const id = document.querySelector(".advID");
const advice = document.querySelector(".quotism");

function loadQuote() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      id.innerHTML = `Advice #${response.slip.id}`;
      advice.innerHTML = `"${response.slip.advice}"`;
    });
}

dice.addEventListener("click", loadQuote);

