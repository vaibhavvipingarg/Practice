(function(){
    String.prototype.replaceAt = function(index, char) {
        var newString = this.substr(0, index) + char + this.substr(index + char.length);
        return newString;
    }
    var str = 'abcd';
    function swap(str, i, j){
        var temp = str[i];
        str = str.replaceAt(i, str[j]);
        str = str.replaceAt(j, temp);

        return str;
    }

    function printPermutations(str, i, end) {
        if (i == end) {
            console.log(str);
        } else {
            for (var j = i; j<=end; j++) {
                str = swap(str, i, j);
                printPermutations(str, i+1, end);
                str = swap(str, i, j);
            }
        }
    }

    printPermutations(str, 0, 3);
})();
