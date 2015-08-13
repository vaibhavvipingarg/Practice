(function(){
    var Stock = (function(symbol, qty){
        var data = [];
        var Stock = function(symbol, qty){
            //Set the initial quantities
            data['symbol'] = symbol;
            data['qty'] = qty;
        };
        Stock.prototype.set = function(key, value){
            data[key] = value;
        };
        Stock.prototype.get = function(key){
            return data[key];
        };

        return Stock;
    }());

    var Stocks = (function(){
        var data = [];

        var Stocks = function(){
        };
        //This should handle the logic for update also
        Stocks.prototype.addStock = function(stock){
            data.push(stock);
        };

        Stocks.prototype.getStock = function(symbol, name){
            var searchname = symbol || name;
            if (searchname === undefined || searchname === '') {
                return;
            }
            for (var i = 0 ; i< data.length; i++) {
                if (data[i].get('symbol') === searchname) {
                    data.splice(i, 1);
                    return;
                }

                if (data[i].get('name') === searchname) {
                    data.splice(i, 1);
                    return;
                }
            }
        };

        Stocks.prototype.getStock = function(symbol, name){
            var searchname = symbol || name;
            if (searchname === undefined || searchname === '') {
                return;
            }
            for (var i = 0 ; i< data.length; i++) {
                if (data[i].get('symbol') === searchname) {
                    return data[i];
                }

                if (data[i].get('name') === searchname) {
                    return data[i];
                }
            }
        };

        return Stocks;
    }());

    var stocks = new Stocks();
    var s = new Stock('aapl', 100);
    stocks.addStock(s);
    var b = stocks.getStock('aapl');
    console.log(b.get('symbol'));
})();
