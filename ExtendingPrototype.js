Array.prototype.moveUp = function(value, by) {
	var index = this.indexOf(value),
		newPos = index - (pos || 1);

	if (index === -1) {
		throw new Error('Item not found');
	}

	if (newPos < 0) {
		newPos = 0;
	}

	this.splice(index,1);
	this.splice(newPos, 0, value);
}

Array.prototype.moveDown = function(value, by) {
	var index = this.indexOf(value);
	if (index === -1) {
		throw new Error('Item not found');
	}
	var newPos = index + (pos || 1);
	if (newPos >= this.length) {
		newPos = this.length;
	}

	this.splice(index, 1);
	this.splice(newPos, 0, value);
}
