(function(){

	function inBox(grid, row, col, num) {
		for (var i = 0; i < 3; i++) {
			for (var j = 0; j < 3; j++) {
				if (grid[row+i][col+j] == num) {
					return false;
				}
			}
		}
		return true;
	}
	function inCol(grid, row, col, num) {
		for (var i = 0; i< 9; i++) {
			if (grid[i][col] == num) {
				return false;
			}
		}
		return true;
	}
	function inRow(grid, row, col, num) {
		for (var i = 0; i< 9; i++) {
			if (grid[row][i] == num) {
				return false;
			}
		}
		return true;
	}
	function isSafe(grid, row, col, num){
		//not in row + not in col + not in box
		return  inRow(grid, row, col, num) &&
				inCol(grid, row, col, num) &&
				inBox(grid, (row - row%3), (col - col%3), num);
	}
	
	function solveSudoku(grid){
		var row, col;
		function findUnassignedCell(grid) {
			for (row = 0; row < grid.length; row++) {
				for (col = 0; col < grid[row].length; col++) {
					if (grid[row][col] == 0) {
						return true;
					}
				}
			}
			return false;
		}
		if (!findUnassignedCell(grid)) {
			return true;//Solved already
		}

		for (var i = 1; i <= 9; i++) {
			if (isSafe(grid, row, col, i)) {
				grid[row][col] = i;
				if (solveSudoku(grid)) {
					return true;
				}
				grid[row][col] = 0;
			}
		}
		return false;
	}

	function printGrid(grid) {
		for (var i =0; i< grid.length; i++) {
			var rowString = ''
			for (var j =0 ; j < grid[i].length; j++) {
				rowString += grid[i][j];
			}
			console.log(rowString + '\n');
		}
		console.log('\n');
	}
	var grid = [  [3, 0, 6, 5, 0, 8, 4, 0, 0],
	              [5, 2, 0, 0, 0, 0, 0, 0, 0],
	              [0, 8, 7, 0, 0, 0, 0, 3, 1],
	              [0, 0, 3, 0, 1, 0, 0, 8, 0],
	              [9, 0, 0, 8, 6, 3, 0, 0, 5],
	              [0, 5, 0, 0, 9, 0, 6, 0, 0],
	              [1, 3, 0, 0, 0, 0, 2, 5, 0],
	              [0, 0, 0, 0, 0, 0, 0, 7, 4],
	              [0, 0, 5, 2, 0, 6, 3, 0, 0]];
	//Driver program
	if(solveSudoku(grid)) {
		printGrid(grid);
	} else {
		console.log('No solution');
	}

})();
