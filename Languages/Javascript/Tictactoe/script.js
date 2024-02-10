document.addEventListener('DOMContentLoaded', function () {
    // Get references to HTML elements
    const board = document.getElementById('board');
    const status = document.getElementById('status');
    const winsXElement = document.getElementById('wins-x');
    const winsOElement = document.getElementById('wins-o');
    const drawsElement = document.getElementById('draws');
    const restartBtn = document.getElementById('restart-btn');
    const counterSpan = document.getElementById('counter');
    const incrementBtn = document.getElementById('incrementBtn');

    // Initialize game variables
    let currentPlayer = 'X';
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let winsX = 0;
    let winsO = 0;
    let draws = 0;

    // Create cells dynamically
    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }

    // Event handler for a cell click
    function handleCellClick(event) {
        // Get the index of the clicked cell
        const index = event.target.getAttribute('data-index');
        
        // Check if the cell is empty and the game is not over
        if (gameBoard[index] === '' && !checkWinner()) {
            // Update the game state with the current player's symbol
            gameBoard[index] = currentPlayer;
            
            // Update the HTML display with the current player's symbol
            event.target.textContent = currentPlayer;
            
            // Add a class to the cell to apply styling based on the player (X or O)
            event.target.classList.add(currentPlayer.toLowerCase());
            
            // Check for a winner
            if (checkWinner()) {
                status.textContent = `Player ${currentPlayer} wins!`;
                if (currentPlayer === 'X') {
                    winsX++;
                } else {
                    winsO++;
                }
                updateScore();
                disableClicks();
            } else if (!gameBoard.includes('')) {
                // Check for a draw
                status.textContent = 'It\'s a draw!';
                draws++;
                updateScore();
            } else {
                // Switch to the next player's turn
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                status.textContent = `Player ${currentPlayer}'s turn`;
            }
        }
    }

    // Check for a winner based on the current game state
    function checkWinner() {
        const winningCombos = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[b] === gameBoard[c]) {
                // If a winning combination is found, return true
                return true;
            }
        }
        // If no winning combination is found, return false
        return false;
    }

    // Disable click events on cells after the game is over
    function disableClicks() {
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.style.pointerEvents = 'none';
        });
    }

    // Update the score display
    function updateScore() {
        winsXElement.textContent = winsX;
        winsOElement.textContent = winsO;
        drawsElement.textContent = draws;
    }

    // Restart the game when the button is clicked
    window.restartGame = function () {
        // Clear the board
        const cells = document.querySelectorAll('.cell');
        cells.forEach(cell => {
            cell.textContent = '';
            cell.classList.remove('x', 'o');
            cell.style.pointerEvents = 'auto'; // Enable click events
        });

        // Reset game variables
        currentPlayer = 'X';
        gameBoard = ['', '', '', '', '', '', '', '', ''];

        // Reset status message
        status.textContent = 'Player X\'s turn';
    };

    // Reset scores on page reload
    window.onload = function () {
        winsX = 0;
        winsO = 0;
        draws = 0;
        updateScore();
    };

    // JavaScript logic to handle button click and update counter
    incrementBtn.addEventListener('click', async () => {
        // Send a request to the Django backend to increment the counter
        const response = await fetch('/increment/');
        const data = await response.json();

        // Update the counter on the webpage
        counterSpan.textContent = data.counter;
    });
});
