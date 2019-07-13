const container = document.querySelector('#containerGrid');

var gridSize = 16;
makeGrid(gridSize);

function makeGrid(gridSize){
    let blockSize = (480 / gridSize);
    let totalborder =  4 * gridSize;
    container.style.width = 480 + totalborder + "px";
    for (let i = 0; i < gridSize; i++){
        let colBlock = document.createElement('div');
        colBlock.classList.add('block');
        for (let j = 0; j < gridSize; j++){
            let rowBlock = document.createElement('div');
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
    
}

