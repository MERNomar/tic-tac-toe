let playerTurn = document.querySelector(".player-turn");
let emptyCells = document.querySelectorAll(".emptyCell");
let cellPlacehoder = true;
let player = (marker , player) => {
    return {marker , player}
}

// the event listener to manage the whole click thing
emptyCells.forEach(cell => cell.addEventListener('click' , e => {
    markGrid.markCell(cell)
}));    












let markGrid = (() => {
    "use strict"
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


    function changeStyleX(){
        playerTurn.style.color = "rgb(132, 132, 209)"
        playerTurn.innerHTML = "Player X turn"
    }

    function changeStyleO(){
        playerTurn.style.color = "brown"
        playerTurn.innerHTML = "Player O turn"

    }
   
    function checkWinState(){
        for (let i = 0; i < winCombos.length; i++){
            let companiton = winCombos[i]
            let a = board[companiton[0]]
            let b = board[companiton[1]]
            let c = board[companiton[2]]
            if (a == "" || b == "" || c == ""){
                console.log("no matches")
                continue
                
            }else if(a == b && b == c ){
                console.log("winner")
                if (a === "O") {console.log("player o wins")}
                else {console.log("player x wins")}
                break
            }}}

    

function Xstate(cell){
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return
    cellPlacehoder = false;
    cell.innerHTML = "X";
    board[cell.dataset.key] = "X"
    checkWinState()
    changeStyleO()
}

function Ostate(cell){
    if (cell.innerHTML === "X" || cell.innerHTML === "O" ) return
    cellPlacehoder = true;
    cell.innerHTML = "O";
    cell.style.color = "red"
    board[cell.dataset.key] = "O"
    checkWinState()
    changeStyleX()
    }


    function markCell(cell){
        if (cellPlacehoder === true){
            Xstate(cell)
        }else{
            Ostate(cell)
        }
    }


return {
    markCell
}
})();












