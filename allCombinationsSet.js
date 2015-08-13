(function(){
    function printAll(strSet, n, k, prefix ){
        if (k == 0) {
            console.log(prefix);
        } else {
            for (var i = 0; i< n; i++){
                var  nprefix = prefix + strSet[i];
                printAll(strSet, n, k-1, nprefix);
            }
        }
    }

    printAll(['a', 'b'], 2, 3, '');
})();