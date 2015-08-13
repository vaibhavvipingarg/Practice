/**
 * Created by vgarg on 4/8/2015.
 */
var http = require("http"),
    fs = require("fs");
var server  = http.createServer();
server.on("request", function(request, response) {
    response.writeHeader("200");
    fs.readFile("test.txt", function(err, data){
        if (err) {
            throw err;
        }
        response.write(data);
        response.end();
    });

}).listen(8081);

