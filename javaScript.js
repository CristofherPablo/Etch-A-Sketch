const gridWrapper = document.getElementsByClassName("wrapper")[0];
const gridSize = 16;
const divDimensions = gridWrapper.clientWidth / gridSize;
const buttonErase = document.getElementsByClassName("erase")[0];
const displaySize = document.querySelector(".showSize");
const userSizeChoice = document.getElementById("size");
let newSize = 16;
var color = "black";
//"#D3D3D3"
// Creating the div grd with flexbox
function gridCreate(gridSize, divDimensions) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const pixDiv = document.createElement("div");
    pixDiv.style.width = `${divDimensions}px`;
    pixDiv.style.height = `${divDimensions}px`;
    pixDiv.style.backgroundColor = '#7fcb98';
    pixDiv.style.margin = "0px";
    pixDiv.classList.add("div-clone");
    gridWrapper.appendChild(pixDiv);
  }
}

//Function to get a random color
function pickColor() {
  const randomRGB = Math.floor(Math.random() * 16777215).toString(16);
  color = `#${randomRGB}`;
  return color;
}
//Math.floor(Math.random()*16777215).toString(16)

//function to display the actual grid size

function divSize(size) {
  displaySize.innerHTML = `${size} X ${size}`;
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

// make the color grey opacity increase till total black
function shadesGrey(divColor) {
  console.log(divColor);
  if (divColor.startsWith("rgba")) {
    let opacity = Number(divColor.slice(-4, -1));
    if (opacity < 0.9) {
      return `rgba(0, 0, 0, ${opacity + 0.1})`;
    } else {
      return "rgba(0, 0, 0, 0.9)";
    }
  } else {
    color = "rgba(0, 0, 0, 0.1)";
    return color;
  }
}

//Painting the grid as the mouse goes over and is clicked down
gridWrapper.addEventListener("mousemove", function (event) {
  if (event.buttons == 1) {
    const target = event.target;
    if (target.classList.contains("div-clone")) {
      //target.style.backgroundColor = "black";
      if (colorPicked == 1) {
        color = "#000000";
        target.style.backgroundColor = color;
      } else if (colorPicked == 2) {
        target.style.backgroundColor = pickColor();
      } else if (colorPicked == 3) {
        target.style.backgroundColor = shadesGrey(target.style.backgroundColor);
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
  color = "#D3D3D3";
  gridCreate(newSize, newDimensions);
}

//Changing the color of the buttons to show when they are activated
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

button1.addEventListener('click', () => {
  button1.classList.add('blackButton');
  changeColor('black');
  button2.classList.remove('rainbow');
})

button2.addEventListener('click', () => {
  button2.classList.add('rainbow');
  changeColor('rainbow');
  button1.classList.remove('blackButton');
})




// calling the main functions to construct the site
userSizeChoice.addEventListener("input", sizeUser);
buttonErase.addEventListener("click", clean);
gridCreate(gridSize, divDimensions);
divSize(gridSize);
