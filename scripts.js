const containerMain = document.querySelector(".container");
const btnPixel = document.querySelector("#btnPixels");
const btnOpacity = document.querySelector("#btnToggleSquareOpactiy");

const selectPixels = document.querySelector("#pixelNumbers");

const screenHeight = 500;
const screenWidth = 900;

let squareOpactiyValue = 1;
let squareOpactityDecrease = false;

containerMain.style.height = intToPixel(screenHeight);
containerMain.style.width = intToPixel(screenWidth);

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function createSquare() {
  gridSquare = document.createElement("div");
  gridSquare.id = "square";
  return gridSquare;
}

function clearGrid() {
  allSquares = document.querySelectorAll("#square");
  for (square of allSquares) {
    square.remove();
  }
}

function intToPixel(num) {
  return `${num}px`;
}

// Calculate the number of pixels to fill the entire container with
function createGrid(pixelSize) {
  const amountOfPixels = (screenHeight / pixelSize) * (screenWidth / pixelSize);
  for (let pixel = 0; pixel < amountOfPixels; pixel++) {
    let square = createSquare();
    square.style.width = intToPixel(pixelSize);
    square.style.height = intToPixel(pixelSize);
    containerMain.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = getRandomColor();
    });
    square.addEventListener("mouseover", () => {
      if (squareOpactityDecrease == true) {
        squareOpactiyValue -= 0.1;
        square.style.opacity = squareOpactiyValue;
        if (squareOpactiyValue <= 0) {
          squareOpactiyValue = 1;
        }
      }
    });
  }
}

btnPixel.addEventListener("click", () => {
  const pixelSize = parseInt(selectPixels.value);
  clearGrid();
  createGrid(pixelSize);
});

btnOpacity.addEventListener("click", () => {
  if (squareOpactityDecrease == false) {
    squareOpactityDecrease = true;
  } else {
    squareOpactityDecrease = false;
  }
});
