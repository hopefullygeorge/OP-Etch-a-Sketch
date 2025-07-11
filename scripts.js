const containerMain = document.querySelector(".container");
const btnNewGrid = document.querySelector("#btnGridSize");
const btnPixel = document.querySelector("#btnPixels");

let gridSize = 700;

function createSquare() {
  gridSquare = document.createElement("div");
  gridSquare.id = "square";
  return gridSquare;
}

function createContainer() {
  gridContainer = document.createElement("div");
  gridContainer.id = "gridContainer";
  return gridContainer;
}

function createNewGrid() {
  let size = parseInt(prompt("How many pixels would you like?"));
  clearGrid();
  createGrid(size);
}

function clearGrid() {
  allSquares = document.querySelectorAll("#square");
  for (square of allSquares) {
    square.remove();
  }
}

function setGridSize() {
  let size = parseInt(prompt("What size grid would you like?"));
  clearGrid();
  gridSize = size;
  containerMain.style.width = `${gridSize}px`;
  containerMain.style.height = `${gridSize}px`;
  createGrid(16);
}

function createGrid(numOfSquares) {
  for (let i = 0; i < numOfSquares ** 2; i++) {
    const square = createSquare();
    const squareSize = gridSize / numOfSquares;
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "red";
    });

    containerMain.appendChild(square);
  }
}

containerMain.style.width = `${gridSize}px`;
containerMain.style.height = `${gridSize}px`;

createGrid(32);

btnPixel.addEventListener("click", createNewGrid);
btnNewGrid.addEventListener("click", setGridSize);
