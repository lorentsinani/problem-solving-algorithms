function generateSuccessors(board) {
    const successors = [];
    const row = board.filter((col) => col !== -1).length;
  
    for (let col = 0; col < board.length; col++) {
        if (isSafe(board, row, col)) {
            const newBoard = board.slice();
            newBoard[row] = col;
            successors.push(newBoard);
        }
    }
  
    return successors;
  }
  
  function isSafe(board, row, col) {
    for (let i = 0; i < row; i++) {
        if (board[i] === col || Math.abs(board[i] - col) === Math.abs(i - row)) {
            return false;
        }
    }
    return true;
  }
  
  function calculateHeuristic(board) {
    let heuristic = 0;
    const n = board.length;
  
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if (board[i] === board[j] || Math.abs(board[i] - board[j]) === Math.abs(i - j)) {
                heuristic++;
            }
        }
    }

    return heuristic;
  }
  
  function aStar(initialBoard) {
    const openSet = [initialBoard];
    const closedSet = new Set();
    const solutions = [];
  
    while (openSet.length > 0) {
        openSet.sort((a, b) => calculateHeuristic(a) - calculateHeuristic(b));
        const current = openSet.shift();
  
        const row = current.filter((col) => col !== -1).length;
        if (row === current.length) {
            solutions.push(current);
        }
  
        closedSet.add(JSON.stringify(current));
  
        const successors = generateSuccessors(current);
  
        for (const successor of successors) {
            const key = JSON.stringify(successor);
  
            if (!closedSet.has(key) && !openSet.some((state) => JSON.stringify(state) === key)) {
                openSet.push(successor);
            }
        }
    }
  
    return solutions.length > 0 ? solutions : null;
  }
  
  const boardSize = 8;
  const initialBoard = Array(boardSize).fill(-1);
  const solutions = aStar(initialBoard);
  
  if (solutions) {
    console.log(`Found ${solutions.length} solution(s):`);
    for (let i = 0; i < solutions.length; i++) {
        console.log(`Solution ${i + 1}:`);
        for (let j = 0; j < boardSize; j++) {
            const row = Array(boardSize).fill(" . ");
            row[solutions[i][j]] = " Q ";
            console.log(row.join(""));
        }
        console.log("\n");
    }
  } else {
    console.log("No solution found.");
  }
  