(function(){
	function buildAux(src) {
		var aux = new Array(src.length);
		for(var i =0 ; i < aux.length; i++) {
			aux.push(new Array(src.length));
		}

		return aux;
	}
	function printMaxSquare(src){
		var aux = buildAux(src);

		for (var i =0; i < src.length; i++) {
			aux[i][0] = src[i][0];
			aux[0][i] = src[0][i];
		}

		for (var i = 1; i < src.length; i++) {
			for (var j = 1; j < src[i].length; j++) {
				aux[i][j] = Math.max(src[i-1][j], src[i][j-1], src[i-1][j-1]) + 1;
			}
		}
		var max = aux[0][0], max_i = 0, max_j = 0;
		for (var i = 0; i < aux.length; i++) {
			for (var j = 0; j < aux[i].length; j++) {
				if (aux[i][j] > max) {
					max = aux[i][j];
					max_i = i;
					max_j = j;
				}
			}
		}

		for (var i = max_i; i > max_i - max; i--) {
			var result = '';
			for (var j = max_j; j > max_j - max; j--) {
				result += src[i][j];
			}	
			console.log(result + '\n');
		}
	}

	var src = [[0, 1, 1, 0, 1], 
               [1, 1, 0, 1, 0], 
               [0, 1, 1, 1, 0],
               [1, 1, 1, 1, 0],
               [1, 1, 1, 1, 1],
               [0, 0, 0, 0, 0]];
	//printMaxSquare(src);
})();