const gridWrapper = document.getElementsByClassName("wrapper")[0];
const gridSize = 16;
const divDimensions = gridWrapper.clientWidth / 16;
//-1.6 + 0.8
const pixDiv = document.createElement("div");
pixDiv.style.width = `${divDimensions}px`;
pixDiv.style.height = `${divDimensions}px`;
pixDiv.style.backgroundColor = "lightgrey";
//pixDiv.style.borderTop = "0.8px solid black";
//pixDiv.style.borderLeft = "0.8px solid black";
pixDiv.style.margin = "0px";
pixDiv.classList.add("div-clone");


//Paiting the grid as the mouse goes over and is clicked down
gridWrapper.addEventListener("mousemove", function (event) {
  if (event.buttons == 1) {
    const target = event.target;
    if (target.classList.contains("div-clone")) {
      target.style.backgroundColor = "black";
    }
  }
});

// Creating the div
function gridCreate(gridSize) {
  for (let i = 0; i < gridSize; i++) {
    for (let y = 0; y < gridSize; y++) {
      const clonePixDiv = pixDiv.cloneNode(true);
      gridWrapper.appendChild(clonePixDiv);
    }
  }
}
gridCreate(gridSize);
