const cells = document.querySelectorAll('.cell');
const turn = document.querySelector('.title');
let isXTurn = true;


cells.forEach(function(cell){
    cell.addEventListener('click', () => {
        if (!cell.classList.contains('x') && !cell.classList.contains('o')) {
            if(isXTurn){
                cell.classList.add('x')
                turn.textContent = "It is O's Turn";
            }else{
                cell.classList.add('o')
                turn.textContent = "It is X's Turn";
            }
            isXTurn = !isXTurn;
        }
    });
});