(function(){
    String.prototype.replaceAt = function(index, char) {
        var newString = this.substr(0, index) + char + this.substr(index + char.length);
        return newString;
    }
    function swap(str, i ,j){
        var temp = str[i];
        str = str.replaceAt(i, str[j]);
        str = str.replaceAt(j, temp);
        return str;
    }
    function allPermutations(str, start, end){
        if (start === end){
            console.log(str);
        } else {
            for(var i = start; i <= end; i++) {
                str = swap(str, start, i);
                allPermutations(str, start+1, end);
                str = swap(str, start, i);
            }
        }

    }

    allPermutations('abc', 0, 2);
})();