const container = document.querySelector('#containerGrid');

var gridSize = 16;
makeGrid(gridSize);

function makeGrid(gridSize){
    let blockSize = (480 / gridSize);
    let totalborder =  4 * gridSize;
    container.style.width = 480 + totalborder + "px";
    for (let i = 0; i < gridSize; i++){
        const colBlock = document.createElement('div');
        colBlock.classList.add('block');
        for (let j = 0; j < gridSize; j++){
            const rowBlock = document.createElement('div');
            rowBlock.style.borderWidth = "2px";
            rowBlock.style.borderStyle = "solid";
            rowBlock.style.float = "left";
            rowBlock.style.width = blockSize + "px";
            rowBlock.style.height = blockSize + "px";
            rowBlock.style.display = "block";
            rowBlock.addEventListener('mouseover', function(){
                rowBlock.classList.add('sketch')
                })
            colBlock.appendChild(rowBlock);
        }
        container.appendChild(colBlock);
    }
}

function reset(){
    //const container = document.getElementById("#containerGrid");
    let child = container.lastElementChild
    while(child){
      container.removeChild(child);
      child = container.lastElementChild;
    }
    makeGrid(gridSize);
}

function generate(){
    var mainSize = document.getElementById("sizeInput").value;
    gridSize = mainSize;
    reset();
}

