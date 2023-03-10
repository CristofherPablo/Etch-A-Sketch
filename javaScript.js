const gridWrapper = document.getElementsByClassName("wrapper")[0];
const gridSize = 16;
const divDimensions = gridWrapper.clientWidth / gridSize;
const buttonErase = document.getElementsByClassName("erase")[0];
const displaySize = document.querySelector(".showSize");
const userSizeChoice = document.getElementById("size");
let newSize = 16;

// Creating the div grd with flexbox
function gridCreate(gridSize, divDimensions) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const pixDiv = document.createElement("div");
    pixDiv.style.width = `${divDimensions}px`;
    pixDiv.style.height = `${divDimensions}px`;
    pixDiv.style.backgroundColor = "lightgrey";
    pixDiv.style.margin = "0px";
    pixDiv.classList.add("div-clone");
    gridWrapper.appendChild(pixDiv);
  }
}

//Function to get a random color
function pickColor() {
  const randomRGB = Math.floor(Math.random() * 16777215).toString(16);
  console.log(`#${randomRGB}`);
  return `#${randomRGB}`;
}
//Math.floor(Math.random()*16777215).toString(16)

//function to display the actual grid size

function divSize(size) {
  displaySize.innerHTML = size;
}

//function to get the user's size of choice

function sizeUser(event) {
  newSize = event.target.value;
  divSize(newSize);
  gridResize(newSize);
}

//function to resize the grid as the user size choice
function gridResize(size) {
  gridWrapper.innerHTML = "";
  const newDimensions = gridWrapper.clientWidth / size;
  gridCreate(size, newDimensions);
}

//toggling among the colors to paint
var colorPicked = 1;
function changeColor(color) {
  if (color == "black") {
    colorPicked = 1;
  } else if (color == "rainbow") {
    colorPicked = 2;
    //set the standard color to black
  } else {
    colorPicked = 1;
  }
}
//Paiting the grid as the mouse goes over and is clicked down
gridWrapper.addEventListener("mousemove", function (event) {
  if (event.buttons == 1) {
    const target = event.target;
    if (target.classList.contains("div-clone")) {
      //target.style.backgroundColor = "black";
      if (colorPicked == 1) {
        target.style.backgroundColor = "#000000";
      } else if (colorPicked == 2) {
        target.style.backgroundColor = pickColor();
      }
    }
  } else {
    return;
  }
});

// Function to clean the board and reset the background color
function clean() {
  gridWrapper.innerHTML = "";
  const newDimensions = gridWrapper.clientWidth / newSize;
  gridCreate(newSize, newDimensions);
}

// calling the main functions to construct the site
userSizeChoice.addEventListener("input", sizeUser);
buttonErase.addEventListener("click", clean);
gridCreate(gridSize, divDimensions);
divSize(gridSize);
