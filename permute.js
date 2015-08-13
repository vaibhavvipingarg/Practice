(function(){

	var cost = [
		[0, 10, 20, 30],
		[100, 0, 10, 20],
		[100, 100, 0, 40],
		[100, 100, 100, 0]
	]
	var N = 4;
	var d = new Array(N);
	for (var i=0; i< d.length; i++) {
		d[i] = 100;
	}
	d[0] = 0;
	for(var i =0 ;i < N; i++) {
		for (var j = i+1; j < N; j++) {
			if (d[j-1] + cost[i][j] < d[j])
				d[j] = d[j-1] + cost[i][j];			
		}
	}

	console.log(d);

})();