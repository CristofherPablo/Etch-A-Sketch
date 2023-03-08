const gridCreate = document.getElementsByClassName("wrapper")[0];

const pixDiv = document.createElement("div");
pixDiv.style.width = "31.25px";
pixDiv.style.height = "31.25px";
//pixDiv.style.border = "1px solid black";
pixDiv.style.margin = '0px';
pixDiv.style.backgroundColor = 'lightgrey';

const numInteractions = Math.floor(gridCreate.clientWidth / 31.25);

for (let i = 0; i < numInteractions; i++) {
  for (let y = 0; y < numInteractions; y++) {
    const clonePixDiv = pixDiv.cloneNode(true);
    gridCreate.appendChild(clonePixDiv);
  };
};

// 31.25px width and height
