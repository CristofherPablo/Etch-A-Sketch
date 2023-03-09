const gridWrapper = document.getElementsByClassName("wrapper")[0];
const gridSize = 16;
const divDimensions = gridWrapper.clientWidth / gridSize;
const buttonErase = document.getElementsByClassName("erase")[0];
const displaySize = document.querySelector('.showSize');
const userSizeChoice = document.getElementById('size');

//function to display the actual grid size

function divSize(size){
  displaySize.innerHTML = size;
};

//function to get the user's size of choice

function sizeUser(event){
  const newSize = event.target.value;
  divSize(newSize);
};
userSizeChoice.addEventListener('input', sizeUser);

//Paiting the grid as the mouse goes over and is clicked down
gridWrapper.addEventListener("mousemove", function (event) {
  if (event.buttons == 1) {
    const target = event.target;
    if (target.classList.contains("div-clone")) {
      target.style.backgroundColor = "black";
    }
  } else {
    return;
  }
});

// Creating the div grd with flexbox
function gridCreate(gridSize, divDimensions) {
  for (let i = 0; i < gridSize ** 2; i++) {
    const pixDiv = document.createElement("div");
    pixDiv.style.width = `${divDimensions}px`;
    pixDiv.style.height = `${divDimensions}px`;
    pixDiv.style.backgroundColor = "lightgrey";
    //pixDiv.style.borderTop = "0.8px solid black";
    //pixDiv.style.borderLeft = "0.8px solid black";
    pixDiv.style.margin = "0px";
    pixDiv.classList.add("div-clone");
    gridWrapper.appendChild(pixDiv);
  }
}

// Function to clean the board and reset the standard values
function clean(){
  gridWrapper.innerHTML = "";
  gridCreate(gridSize, divDimensions);
};


buttonErase.addEventListener("click", clean);
gridCreate(gridSize, divDimensions);
divSize(gridSize);