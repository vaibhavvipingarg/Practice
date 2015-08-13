var singleton = (function(){
	var instance;
	function init() {
		var privateVar = 1;
		function privateMethod() {
			return privateVar;
		}

		return {
			publicVar = 2,
			publicMethod: function() {
				return publicVar + privateMethod();
			}
		}
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = init();
			}

			return instance;
		};
	};

})();

var a = singleton.getInstance().publicMethod();