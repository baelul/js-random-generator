var loveButton = document.getElementById("love-button");
var loveOutput = document.getElementById("love-output");

var calcButton = document.getElementById("calc-button");
var calcOutput = document.getElementById("calc-output");

const list = [
  "love will find you soon!",
  "maybe you should try again next time...",
  "you should look around you, I think you've already found the one.",
  "you're probably gonna stay in your current position for awhile.",
  "you're a love machine! You'll find a partner in no time"
];

const styles = ["i", "b", "u"]

loveButton.addEventListener("click", restyle);
calcButton.addEventListener("click", callHalfNum);

function restyle () {
   // randomize color
    var randomRed = Math.random() * 255;
    var randomGreen = Math.random() * 255;
    var randomBlue = Math.random() * 255;
    var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    loveOutput.style.color = outputColor;

    // randomize font style
    // reset style values
    loveOutput.style.fontStyle = "normal";
    loveOutput.style.fontWeight = "normal";
    loveOutput.style.textDecoration = "none";

    var randInd = Math.random() * 3; // random val
    // randomly choose style from list of styles
    if ("i" == styles[parseInt(randInd, 10)]) {
      loveOutput.style.fontStyle = "italic";
    } else if ("b" == styles[parseInt(randInd, 10)]) {
      loveOutput.style.fontWeight = "bold";
    } else if ("u" == styles[parseInt(randInd, 10)]) {
      loveOutput.style.textDecoration = "underline";
    }

    // randomize background color
    var rRed = Math.random() * 255;
    var rGreen = Math.random() * 255;
    var rBlue = Math.random() * 255;
    var bkgdColor = "rgba(" + rRed + "," + rGreen + "," + rBlue + ", 0.5)";
    loveOutput.style.backgroundColor = bkgdColor;


  // call message func
  fortune (document.getElementById("love-input").value);
}

function fortune (name) {
  // random message
  if (name == "") {
    loveOutput.innerText = "";
  } else {
    var x = Math.random() * 5;
    loveOutput.innerText = name + ", " + list[parseInt(x, 10)]; // parseInt() turns strings into int
  }
}

function callHalfNum() {
  halfNumber(document.getElementById("calc-input").value);
}

function halfNumber(num) {
  // divide
  if (num == "") {
    calcOutput.innerText = "";
  } else {
    var x = num / 2;
    calcOutput.style.fontWeight = "bold";
    calcOutput.innerText = x;
  }
}
