(function(){
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

	var grid = [[1,2,3],
				[4,5,6],
				[7,8,9]];
	printSpiral(grid);

})();