(function(){

    csv = 'Year,Make - "1",Model,Description,Price\n' +
    'Year,Make - "1",Model,Description,Price';
    /*1997,Ford,E350,"ac, abs, moon",3000.00
    1999,Chevy,"Venture ""Extended Edition""\","",4900.00
    1999,Chevy,"Venture ""Extended Edition, Very Large""\","",5000.00
    1996,Jeep,Grand Cherokee,"MUST SELL!
    air, moon roof, loaded",4799.00";*/

    //3 things
    // 1. Row delimiter
    //2. Quoted text
    //3. String delimiter
    function parseCsv(str){
        var results = [], i, cc, nc, row = 0, col = 0;
        var quoted =  false;
        for(i =0 ; i < str.length; i++) {
            cc = str[i];
            nc = str[i+1];
            results[row] = results[row] || [];
            results[row][col] = results[row][col] || '';

            if (cc == '"' && quoted && nc == '"') {
                results[row][col] += cc;
                ++i;
                continue;
            }
            if (cc =='"') {
                quoted = !quoted;
                continue;
            }
            if (cc == ',' && !quoted) {
                col++;
                continue;
            }
            if (cc == '\n' && !quoted) {
                row++;
                col = 0;
                continue;
            }
            results[row][col] += cc;
        }

        return results;
    }

    var results = parseCsv(csv);
})();
