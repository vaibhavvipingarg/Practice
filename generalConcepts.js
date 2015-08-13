(function() {
	var fibonacciDP = (function(){
		var mem = [0,1];
		var fib = function(n) {
			var result = mem[n];
			if (typeof result !== 'number') {
				result = fib(n-1) + fib(n-2);
				mem[n] = result;
			}
			return result;
		}
		return fib;
	}());
	//console.log(fibonacciDP(4));

	function fibonacci(n) {
		if (n <= 0) {
			return 0;
		}
		if (n == 1) {
			return 1;
		}
		return fibonacci(n-1) + fibonacci(n-2);
	}
	/*for (var i = 0; i < 5; i++) {
		console.log(fibonacci(i));
	}*/

	var factorialDP = (function() {
		var mem = [1,1];
		var fact = function(n) {
			var result = mem[n];
			if (typeof result !== 'number') {
				result = n * fact(n-1);
				mem[n] = result;
			}
			return result;
		}
		return fact;
	})();

	//console.log('factorial DP: ' + factorialDP(4));
	function factorial(n) {
		if (n < 2) {
			return 1;
		}
		return n*factorial(n-1);
	}
	//console.log(factorial(5));

	var arr = [3,1,6,2,7];
	function merge(left, right) {
		var result = [];
		while(left.length && right.length) {
			if (left[0] <= right[0]) {
				result.push(left.shift());
			} else {
				result.push(right.shift());
			}
		}
		while(left.length) {
			result.push(left.shift());
		}

		while(right.length) {
			result.push(right.shift());
		}
		return result;
	}
	function mergeSort(arr) {
		if (arr.length < 2) {
			return arr;
		}
		var mid = parseInt(arr.length/2);
		var left = mergeSort(arr.slice(0, mid));
		var right =mergeSort(arr.slice(mid, arr.length));

		return merge(left, right);
		//return merge(mergeSort(left), mergeSort(right));
	}
	console.log(mergeSort(arr));

	//Promises
	var readFile = function(fileName) {
		return new Promise(resolve, reject) {
			fs.readFile(fileName, function(err, res) {
				if (err) {
					reject(err);
				} else {
					resolve(res);
				}
			});
		};
	}

	var res = readFile('textFile').then(function(res) {
		//Use the response to move forward
	}, function(err) {
		alert(err);
	})
})();