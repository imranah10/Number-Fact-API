let fact = document.getElementById("fact");
let factText = document.getElementById("factText");

let numberInput = document.getElementById("numberInput");

numberInput.addEventListener("input", getFact);

function getFact() {
  let number = numberInput.value;

  if (number != "") {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", `http://numbersapi.com/${number}`, true);

    xhr.onload = function () {
      if (this.status == 200) {
        fact.style.display = "block";
        factText.innerText = this.responseText;
      }
    };

    xhr.send();
  } else {
    fact.style.display = "none";
  }
}
