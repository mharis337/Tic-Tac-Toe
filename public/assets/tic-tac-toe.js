const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('.title');
let isXTurn = true;



cells.forEach(function(cell) {
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
            if (isXTurn) {
                cell.classList.add('x');
                turn.textContent = "It is O's Turn";
            } else {
                cell.classList.add('o');
                turn.textContent = "It is X's Turn";
                
            }
            const winner = winCheck();
            if (winner) {
               
                alert(`${winner} wins!`);
                cells.forEach(cell => cell.classList.add('disabled'));
            } else if ([...cells].every(cell => cell.classList.contains('x') || cell.classList.contains('o'))) {
                alert("It's a draw!");
            }
            
            isXTurn = !isXTurn;
            
        }
    });
});
function winCheck() {
    const winnerlist = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (const combination of winnerlist) {
        const [a, b, c] = combination;
        if (cells[a].classList.contains('x')
            && cells[b].classList.contains('x') 
            && cells[c].classList.contains('x')) {
            return 'X';
        }
        if (cells[a].classList.contains('o') 
            && cells[b].classList.contains('o') 
            && cells[c].classList.contains('o')) {
            return 'O';
        }
    }
    return null;
};
document.querySelector('.restart').addEventListener('click', restart);
function restart() {
    cells.forEach(cell => {
        cell.classList.remove('x', 'o', 'disabled');
    });
    isXTurn = true;
    turn.textContent = "It is X's Turn";
};