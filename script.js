var btnTranslate = document.querySelector(".translate-btn");
var txtInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output-div");

var serverurl = "https://api.funtranslations.com/translate/minion.json";

function constructUrl(text) {
  return serverurl + "?" + "text=" + text;
}

function errorhandler(error) {
  console.log("A error has occurred", error);
  alert("Something went wrong , Plss try again");
}

function clickHandler() {
  var inputText = txtInput.value;
  fetch(constructUrl(inputText)) 
    .then(Response => Response.json())
    .then(json => {
      outputDiv.innerText = json.contents.translated
    })
    .catch(errorhandler);
}


btnTranslate.addEventListener("click", clickHandler);