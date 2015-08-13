(function (){
	function inOrderTraversal(root) {
		if (root === null) {
			return;
		}
		inOrderTraversal(root.left);
		console.log(root.value);
		inOrderTraversal(root.right);
	}

	function preOrderTraversal(root) {
		if (root === null) {
			return;
		}

		console.log(root.value);
		preOrderTraversal(root.left);
		preOrderTraversal(root.right);
	}

	function postOrderTraversal(root) {
		if (root === null) {
			return;
		}
		postOrderTraversal(root.left);
		postOrderTraversal(root.right);
		console.log(root.value);
	}

	function printKthLargest(root, k, count) {
		if (root === null || count >= k) {
			return;
		}
		printKthLargest(root.right, k, count);
		count++;
		if (count === k) {
			console.log(root.value);
			return;
		}
		printKthLargest(root.left, k, count);
	}

	function printKthSmallest(root, k, count) {
		if (root === null || count >= k) {
			return;
		}
		printKthLargest(root.left, k, count);
		count++;
		if (count === k) {
			console.log(root.value);
			return;
		}
		printKthLargest(root.right, k, count);
	}

	function isComplete(root, count, index) {
		if(root === null) {
			return true;
		}
		if (index > count) {
			return false;
		}
		return (isComplete(root.left, 2(index)+1, count) && isComplete(root.right, 2(index)+2, count));
	}

	function sumOfNodes(root) {
		if (root === null) {
			return 0;
		}
		return (root.value + sumOfNodes(root.left) + sumOfNodes(root.right));
	}

	function sumLeftLeaves(root) {
		if (root == null) {
			return 0;
		}

		if(ifLeaf(root.left)) {
			sum += root.left.value;
		}
		sum += sumLeftLeaves(root.left) + sumLeftLeaves(root.right)
		return sum;
	}

})();