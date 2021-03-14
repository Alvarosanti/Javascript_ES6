const playBoard = document.querySelector('.play-board');
const boxs = document.querySelectorAll('section span');
const players = document.querySelector('.players');
const turn = document.querySelector('.turn');
const winning = [
                [0,1,2],
                [3,4,5],    
                [6,7,8],

                [0,3,6],
                [1,4,7],
                [2,5,8],
                
                [0,4,8],
                [2,4,6]
];
const resultbox = document.querySelector('.result-box');
const wontext = resultbox.querySelector('.won-text');
const btnreplay = resultbox.querySelector('button')
const turnPlayer = players.querySelector('span');
const btnreplayShow = document.querySelector('.btn');

let player1 = 'X';
let player2 = 'O';
let circleTurn = false;

boxs.forEach(cell =>{
    cell.addEventListener('click',handleClick, {once :true})

});

function handleClick(e){
    const cell = e.target;
    console.log(cell);
    const currentClass = circleTurn ? cell.innerText = `${player2}`
    : cell.innerText = `${player1}`
    placeMark(cell,currentClass);
    turnPlayer.innerHTML = `${currentClass} played!`;
    
    if(checktoWin(currentClass)){
        console.log(`Winner ${currentClass}`);
        gameover(false);
    }else if(isDraw()){
        gameover(true);
    }else{
        nextTurn();
    };
};

function gameover(draw){
    if(draw){
        wontext.innerText = 'Draw';
    }else{
        resultbox.classList.add('show');
    };
    wontext.innerText = `${circleTurn ? "O" : "X"} Wins!`;
};

function isDraw(){
    return [...boxs].every(cell =>{
        return  cell.classList.contains(player1) ||
                cell.classList.contains(player2)
    });
};

function placeMark(cell,currentClass){
    cell.classList.add(currentClass);
};

function nextTurn(){
    circleTurn = !circleTurn;
};

function checktoWin(currentClass){
    return winning.some(combination =>{
        return combination.every(index =>{
            return boxs[index].classList.contains(currentClass);
        });
    });
};

btnreplay.onclick = () =>{
    window.location.reload();
}

btnreplayShow.onclick =() =>{
    window.location.reload();
}



