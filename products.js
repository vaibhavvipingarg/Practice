/**
 * Created by vgarg on 5/6/2015.
 */
(function(){
    function products(arr){
        var psf = 1;
        var pa = new Array(arr.length);
        for (var i = 0 ; i < arr.length; i++){
            var pf = 1;
            for(var j = i +1; j < arr.length; j++) {
                pf *= arr[j];
            }
            pa[i] = psf * pf;
            psf *= arr[i];
        }

        return pa;
    }

    var p = products([10,3,5,6,2]);
    console.log(p);
})();
