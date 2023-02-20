const inputRed = document.querySelector("#red");
const inputBlue = document.querySelector("#blue");
const inputGreen = document.querySelector("#green");
let labelRed = document.querySelector("#redLabel");
const button = document.querySelector("#hex");
console.log(labelRed);

// míchání barev
function valueToHex(c) {
  let hexCode = c.toString(16);
  return hexCode;
}
// prevede celé rgb na hex kód
function rgbToHex(r, g, b) {
  return valueToHex(r) + valueToHex(g) + valueToHex(b); // 255, 0, 255 -> ff00ff
}

let rgb = {
  red: 0,
  green: 0,
  blue: 0,
};

function colorBackground() {
  button.style.background = `rgb(${rgb.red}, ${rgb.green}, ${rgb.blue})`;
  button.innerText = `#${rgbToHex(rgb.red, rgb.green, rgb.blue)}`;
}

red.addEventListener("input", (e) => {
  rgb.red = Math.round(255 * (e.target.value / 100));
  redLabel.textContent = `${e.target.value}%`;
  colorBackground();
});

green.addEventListener("input", (e) => {
  rgb.green = Math.round(255 * (e.target.value / 100));
  greenLabel.textContent = `${e.target.value}%`;
  colorBackground();
});

blue.addEventListener("input", (e) => {
  rgb.blue = Math.round(255 * (e.target.value / 100));
  blueLabel.textContent = `${e.target.value}%`;
  colorBackground();
});

hex.addEventListener("click", () => {
  navigator.clipboard.writeText(hex.innerText);
  alert(`${hex.innerText} has been copied to clipboard`);
});
