(function(){
	//Refer to sudoku.js for sudoku solver
	
	//Print matrix in a spiral form
	function printSpiral(grid) {
		var sr=0, sc=0, er=grid.length, ec=grid[0].length, i;
		var sol = '';
		while(sr < er && sc < ec) {
			for(i = sr ; i < ec; ++i) {
				sol += grid[sr][i];
			}
			sr++;//Increase the starting row
			for(i = sr; i < er; ++i) {
				sol += grid[i][ec-1];
			}
			ec--; // reduce the ending column
			if (sr < er) {
				for(i = ec-1; i >= sc; --i) {
					sol += grid[er-1][i];	
				}
				er--;
			}
			if (sc < ec) {
				for (i = er-1; i >= sr; --i) {
					sol += grid[i][sc];
				}
				sc++;
			}
		}
		console.log(sol);
	}

	/*var grid = [[1,2,3],
				[4,5,6],
				[7,8,9]];
	printSpiral(grid);*/

	//find element in the matrix that is sorted row wise and column wise
	function find(m, x) {
		var i = 0;
		var j = m[0].length -1;
		var n = m.length;

		while(i < n && j >=0) {
			if (m[i][j] == x) {
				return true;
			}
			if (m[i][j] > x) {
				j--;
			} else {
				i++;
			}
		}
		return false;
	}
	//find(m, 29);

	// Change the matrix to show 1's if any 1 is present in row or column
	function changeMatrix(src) {
		var rows = new Array(src.length);
		for (var i = 0; i < rows.length; i++) {
			rows[i] = 0;
		}
		var cols = new Array(src[0].length);
		for (var i = 0; i < cols.length; i++) {
			cols[i] = 0;
		}

		for (var i = 0; i < src.length; i++) {
			for (var j = 0; j< src[i].length; j++) {
				if (src[i][j] == 1){
					rows[i] = 1;
					cols[j] = 1;
				}
			}
		}

		for (var i = 0; i < src.length; i++) {
			var row = '';
			for (var j = 0; j< src[i].length; j++) {
				if (rows[i] == 1 || cols[j] == 1) {
					src[i][j] = 1;
				}
				row += src[i][j];
			}
			console.log(row + '\n');
		}
	}
	//changeMatrix([[1,2,3],[4,1,6],[7,8,9]]);
})();
