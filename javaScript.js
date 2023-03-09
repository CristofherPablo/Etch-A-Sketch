const gridCreate = document.getElementsByClassName("wrapper")[0];
const isMouseDown = `false`;
const divDimensions = (gridCreate.clientWidth / 16) - 1.6;

const pixDiv = document.createElement("div");
pixDiv.style.width = `${divDimensions + 0.8}px`;
pixDiv.style.height = `${divDimensions}px`;
pixDiv.style.borderTop = "0.8px solid black";
pixDiv.style.borderLeft = "0.8px solid black";
pixDiv.style.margin = "0px";
pixDiv.classList.add('div-clone');

gridCreate.addEventListener('mousedown', function(event) {
    isMouseDown = `true`;
});

gridCreate.addEventListener('mouseup', function(event) {
    isMouseDown = `false`;
});

gridCreate.addEventListener('mousemove', function(event) {
    if(isMouseDown){
        const target = event.target;
        if(target.classList.contains('div-clone')){
            target.style.backgroundColor = 'black';
        };
    };
});

for (let i = 0; i < 16; i++) {
  for (let y = 0; y < 16; y++) {
    const clonePixDiv = pixDiv.cloneNode(true);
    gridCreate.appendChild(clonePixDiv);
  }
}

//
