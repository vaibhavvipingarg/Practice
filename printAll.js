(function(){
    function printAll(pre, n, k, start){
        if (k === 0) {
            console.log(pre);
        } else {
            for (var i =start; i<=n;i++){
                var old = pre;
                pre += i;
                printAll(pre, n, k-1, i+1);
                pre = old;
            }
        }
    }

    printAll('', 5, 3, 1);
})();