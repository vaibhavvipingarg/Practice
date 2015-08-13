function({
	var N = 4;
	function canPlace(row, col, board){
		for(var i = 0; i < row; i++) {
			if(board[i][col] == 1) {
				return false;
			}
		}

		for(var i = row, var j = col; i >=0 && j >=0; i--,j--){
			if(board[i][j] == 1) {
				return false;
			}
		}

		for(var i = row, var j = col; i <N && j >=0; i++,j--){
			if(board[i][j] == 1) {
				return false;
			}
		}
		return true;
	}

	function placeQueen(board, col){
		if (col >= N) {
			return true;
		}
		for(var i = 0 ;i < N; i++) {
			if (canPlace(i, col, board)) {
				board[i][col] = 1;
				if (placeQueen(board, col+1)) {
					return true;
				}
				board[i][col] = 0;//backtrack
			}
		}
		return false;
	}

	// initalize board
	placeQueen(board, 0);

}());