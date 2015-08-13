(function() {

	//Helper functions
	function getAttachment(val) {
		var attachString = '';
		switch(val) {
			case 2:
					attachString = " hundred and ";
					break;
			case 3:
					attachString = " thousand ";
					break;
					
			case 6: attachString = " million ";
					break;
		}
		return attachString;
	}

	function num2Text(num) {
		//TODO: Add check for negetive values
		//TODO: Add check for decimal values

		var ones = ['', 'one', 'two', 'three', 'four', 'five', 'six'],
			tens = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty'],
			length = 0,
			power = 0;
		
		//Length conversion			
		if (typeof num == "string") {
			length = num.length;
		} else {
			length = num.toString().length;
		}

		//Base cases
		if (length == 1) {
			return ones[num];
		}
		if (length == 2) {
			var numSplit = num.toString().split('');
			if (num < 20) {
				return 'something';
			}
			return tens[numSplit[0]] + ' ' + ones[numSplit[1]];
		}

		if (length == 3) {
			var power = 2;
			var l = parseInt(num/Math.pow(10, power)),
				r = num%Math.pow(10, power);

			return num2Text(l) + getAttachment(power) + num2Text(r);
		}
		//break it apart into left and right, return the concat
		power = length - 1;
		var l = parseInt(num/Math.pow(10, 3)),
			r = num%Math.pow(10, 3);

		return num2Text(l) + getAttachment(length - l.toString().length) + num2Text(r);
	}

	console.log(num2Text(23123355));
})();

