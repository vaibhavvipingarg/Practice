/**
 * Created by vgarg on 4/30/2015.
 */
(function(){
    function hanoi(n, s, d, a){
        if (n === 0){
            return;
        }
        hanoi(n-1, s, a, d);
        console.log('Move disc ' + n + ' from ' + s + ' to ' + d);
        hanoi(n-1, a, d, s);
    }

    hanoi(3,'s', 'd', 'a');
})();
