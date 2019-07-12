
const container = document.querySelector('#containerGrid');
const containerTitle = document.querySelector('#containerTitle');
containerTitle.style.border = "thick solid #0000FF";
containerTitle.style.float = "left";
containerTitle.style.height = "200px";
container.style.width = "48%";
container.style.float = "right";


for (var i = 0; i < 16; i++){
  const colBlock = document.createElement('div');
  colBlock.classList.add('block');
  for (var j = 0; j < 16; j++){
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('rowBlock');
    rowBlock.style.border = "thick solid #0000FF";
    rowBlock.style.float = "right";
    rowBlock.style.width = "4.5%";
    rowBlock.style.height = "20px";
    rowBlock.style.display = "block";
    rowBlock.hover.style.background-color = "yellow";


    colBlock.appendChild(rowBlock);
  }
  container.appendChild(colBlock);
}