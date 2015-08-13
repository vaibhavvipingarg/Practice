(function(){

   /* var dictionary = ['GEEKS', 'FOR', 'QUIZ', 'GO'];
    function isValid(str) {
        for (var i =0 ;i < dictionary.length; i++) {
            if (dictionary[i] === str) {
                return true;
            }
        }
        return false;
    }

    function findWordsHelper(i, j , visited, boggle, str) {
        visited[i][j] = true;
        var previous = str;
        str += boggle[i][j];

        if(isValid(str)) {
            console.log(str);
        }

        for (var row = i-1; row <= i+1 && row < boggle.length; row++){
            for (var col = j-1; col <= j+1 && col < boggle[i].length; col++) {
                if ((row >=0 && col >=0) && !visited[row][col]) {
                    findWordsHelper(row, col, visited, boggle, str);
                }
            }
        }
        str = previous;
        visited[i][j] = false;
    }

    function findWords(){
        var rows = [];
        //Mark all the visited points as false
        for (var i =0; i< boggle.length; i++) {
            var col = [];
            for (var j = 0 ;j < boggle[i].length; j++) {
                col[j] = false;
            }
            rows.push(col);
        }

        var str = '';
        for (var i =0; i< boggle.length; i++) {
            for (var j = 0 ;j < boggle[i].length; j++) {
                findWordsHelper(i, j, rows, boggle, str);
            }
        }

    }

    var boggle = [['G', 'I', 'Z'],
                  ['U', 'E', 'K'],
                  ['Q', 'S', 'E']];
    findWords(boggle);*/

    var s = "word";
    var sp = s.split("");
    for (var i = 0, l = 1 << s.length; i < l; i++) {
        for (var j = i, k = 0; j; j >>= 1, k++) {
            sp[k] = (j & 1) ? sp[k].toUpperCase() : sp[k].toLowerCase();
        }
        var st = sp.join("");
        var d = document.createElement("p");
        d.appendChild(document.createTextNode(st));
        document.body.appendChild(d);
    }
})();
