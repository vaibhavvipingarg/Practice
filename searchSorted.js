(function(){
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
	changeMatrix([[1,2,3],[4,1,6],[7,8,9]]);
})();
