import calculateWinner from './calculateWinner'

export default function miniMax(gameMap, depth = 1, isMaximizingPlayer = true) {

	let winner = calculateWinner(gameMap);

	if (depth == 9 || winner)
		if (winner == 'X')
			return 100 - depth;
		else if (winner == 'O')
			return -100 + depth;
		else
			return 0;

	if (isMaximizingPlayer) {
		let bestVal = -Infinity;
		let bestMove = -1;
		for (const [i, move] of gameMap.entries()) {
			if (!move) {
				let newBoard = gameMap.slice();
				newBoard[i] = 'X';
				let value = miniMax(newBoard, depth + 1, false);
				if (bestVal < value) {
					bestVal = value;
					bestMove = i;
				}
			}
		}

		return depth == 1 ? bestMove : bestVal;
	}

	else {
		let bestVal = +Infinity;
		for (const [i, move] of gameMap.entries()) {
			if (!move) {
				let newBoard = gameMap.slice();
				newBoard[i] = 'O';
				let value = miniMax(newBoard, depth + 1, true);
				bestVal = Math.min(bestVal, value);

			}
		}

		return bestVal;
	}


}