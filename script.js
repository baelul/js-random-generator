var button = document.getElementById("button");
var output = document.getElementById("output");
const list = [
  "love will find you soon!",
  "maybe you should try again next time...",
  "you should look around you, I think you've already found the one.",
  "you're probably gonna stay in your current position for awhile.",
  "you're a love machine! You'll find a partner in no time"
];

const styles = ["i", "b", "u"]

button.addEventListener("click", restyle);

function restyle () {
   // randomize color
    var randomRed = Math.random() * 255;
    var randomGreen = Math.random() * 255;
    var randomBlue = Math.random() * 255;
    var outputColor = "rgb(" + randomRed + "," + randomGreen + "," + randomBlue + ")";
    output.style.color = outputColor;

    // randomize font style
    // reset style values
    output.style.fontStyle = "normal";
    output.style.fontWeight = "normal";
    output.style.textDecoration = "none";

    var randInd = Math.random() * 3; // random val
    // randomly choose style from list of styles
    if ("i" == styles[parseInt(randInd, 10)]) {
      output.style.fontStyle = "italic";
    } else if ("b" == styles[parseInt(randInd, 10)]) {
      output.style.fontWeight = "bold";
    } else if ("u" == styles[parseInt(randInd, 10)]) {
      output.style.textDecoration = "underline";
    }

    // randomize background color
    var rRed = Math.random() * 255;
    var rGreen = Math.random() * 255;
    var rBlue = Math.random() * 255;
    var bkgdColor = "rgba(" + rRed + "," + rGreen + "," + rBlue + ", 0.5)";
    output.style.backgroundColor = bkgdColor;
  

  // call message func
  fortune (document.getElementById("input").value);
}

function fortune (name) {
  // random message
  if (name == "") {
    output.innerHTML = "Enter your name to reveal your fate!";
  } else {
    var x = Math.random() * 5;
    output.innerHTML = name + ", " + list[parseInt(x, 10)]; // parseInt() turns strings into int
  }
}
