const gridCreate = document.getElementsByClassName("wrapper")[0];
const divDimensions = ((gridCreate.clientWidth) / 16) -1.6;

const pixDiv = document.createElement("div");
pixDiv.style.width = `${divDimensions + .8}px`;
pixDiv.style.height = `${divDimensions}px`;
pixDiv.style.borderTop = "0.8px solid black";
pixDiv.style.borderLeft = "0.8px solid black";
pixDiv.style.margin = '0px';
//pixDiv.style.backgroundColor = 'lightgrey';

const numInteractions = Math.floor(gridCreate.clientWidth / divDimensions);

for (let i = 0; i < 16; i++) {
  for (let y = 0; y < 16; y++) {
    const clonePixDiv = pixDiv.cloneNode(true);
    gridCreate.appendChild(clonePixDiv);
  };
};

// 31.25px width and height
