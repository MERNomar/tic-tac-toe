let emptyCells = document.querySelectorAll(".emptyCell");
let cellPlacehoder = true;


emptyCells.forEach(cell => cell.addEventListener('click' , e => {
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return

    if (cellPlacehoder === true){
        Xstate(cell)
    }else{
        Ostate(cell)
    }
}));


function Xstate(cell){
    cellPlacehoder = false;
    cell.innerHTML = "X";
}

function Ostate(cell){
    cellPlacehoder = true;
    cell.innerHTML = "O";
    cell.style.color = "red"
}


emptyCells.forEach(cell => cell.addEventListener('click' , e => {
}));
console.log(emptyCells[0])

