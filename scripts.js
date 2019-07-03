const container = document.querySelector('#container');

for (var i = 0; i < 16; i++){
  const colBlock = document.createElement('div');
  colBlock.classList.add('block');
  colBlock.style.border = "thick solid #0000FF";
  for (var j = 0; j < 16; j++){
    const rowBlock = document.createElement('div');
    rowBlock.classList.add('rowBlock');
    rowBlock.style.border = "thick solid #0000FF";
    colBlock.appendChild(rowBlock);
  }
  container.appendChild(colBlock);
}
container.style.display = "inline-grid";
container.style.width = "75%";
