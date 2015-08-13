/**
 * Created by vgarg on 4/7/2015.
 */
(function () {
    function printAllCombinations(str){
        var arr = str.split('');
        var total = Math.pow(2, arr.length);
        for(var i =0 ; i < total; i++){
            for(var j = i, k =0; k < arr.length; k++, j >>= 1) {
                arr[k] = (j & 1) ? arr[k].toUpperCase() : arr[k].toLowerCase();
            }
            console.log(arr.join(''));
        }
    }

    printAllCombinations('word');
})();
