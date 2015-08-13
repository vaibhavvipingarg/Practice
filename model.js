(function(){

    function model2(){
        var data = {};
        return {
            getName: function(){
                return this.data.name;
            },
            setName: function(name){
                this.data.name = name;
            }
        }
    }

    var Model = function() {
        this.data = {};
        this.events = {};
    }
    Model.prototype.set = function(key, value){
        if (this.get(key) !== value){
            var temp = {};
            temp.propName = key;
            temp.propValue = value;
            this.events['onchange'](temp);
        }
        this.data[key] = value;
    };
    Model.prototype.get = function(key){
        return this.data[key];
    };
    Model.prototype.on = function(eventName, callback){
        var event = 'on' + eventName;
        this.events[event] = callback;
    };



    var m = new Model();
    m.on('change', function(data){
        console.log('Changed:' + data.propName + ' -> ' + data.propValue);
    });
    m.set('first_name', 'Vaibhav');
    m.set('last_name', 'Garg');
    console.log(m.get('first_name'));
    console.log(m.get('last_name'));

    m.set('first_name', 'Afrundus');

    console.log(m.get('first_name'));
    console.log(m.get('last_name'));

    /*var m2 = model2();
    m2.setName('garg');
    console.log(m2.getName());*/

})();
