
let emptyCells = document.querySelectorAll(".emptyCell");
let cellPlacehoder = true;
let board = ["","","","","","","","",""]
let player = (marker , player) => {
    return {marker , player}
}

// the event listener to manage the whole click thing
emptyCells.forEach(cell => cell.addEventListener('click' , e => {

    if (cellPlacehoder === true){
        markGrid.Xstate(cell)
    }else{
        markGrid.Ostate(cell)
    }
}));    


const winState = (() => {
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



})






let markGrid = (() => {
function Xstate(cell){
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return
    cellPlacehoder = false;
    cell.innerHTML = "X";
}

function Ostate(cell){
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return
    cellPlacehoder = true;
    cell.innerHTML = "O";
    cell.style.color = "red"

}

function sayhi(){
console.log("hi")}

return {
    Ostate , Xstate , sayhi
}
})();

