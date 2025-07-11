const containerMain = document.querySelector(".container");
const btnNewGrid = document.querySelector("#btnGridSize");

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
  let size = parseInt(prompt("What size grid would you like?"));
  clearGrid();
  createGrid(size);
}

function clearGrid() {
  allGridContainers = document.querySelectorAll("#gridContainer");
  for (container of allGridContainers) {
    container.remove();
  }
}

function createGrid(numOfSquares) {
  for (let i = 0; i < numOfSquares; i++) {
    let newContainer = createContainer();
    containerMain.appendChild(newContainer);
    for (let j = 0; j < numOfSquares; j++) {
      let newSquare = createSquare();
      newContainer.appendChild(newSquare);
      newSquare.addEventListener("mouseover", () => {
        newSquare.style.backgroundColor = "red";
      });
    }
  }
}

createGrid(16);

btnNewGrid.addEventListener("click", createNewGrid);
