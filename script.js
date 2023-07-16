let emptyCells = document.querySelectorAll(".emptyCell");
let cellPlacehoder = true;
const winCombos = [
    [0,1,2],
    [0,3,6],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [0,4,8]
];
let board = ["","","","","","","","",""]

emptyCells.forEach(cell => cell.addEventListener('click' , e => {

    if (cellPlacehoder === true){
        Xstate(cell)
    }else{
        Ostate(cell)
    }
}));


function Xstate(cell){
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return
    cellPlacehoder = false;
    cell.innerHTML = "X";
    console.log(cell)
}

function Ostate(cell){
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return
    cellPlacehoder = true;
    cell.innerHTML = "O";
    cell.style.color = "red"
    console.log(cell)

}


emptyCells.forEach(cell => cell.addEventListener('click' , e => {
}));




