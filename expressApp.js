/**
 * Created by vgarg on 4/8/2015.
 */
var express = require('express');
var request = require('request');
var url = require('url');
var app = express();
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});
app.get('/tweets/:username', function(req, res){
    var uname = req.params.username;
    var options = {
        protocol: 'https',
        host: 'api.twitter.com',
        pathname: '/1.1/statuses/user_timeline.json',
        query: {
            screen_name: uname,
            count: 10
        }
    }
    var twitterUrl = url.format(options);
    request(twitterUrl).pipe(res);
});
app.listen(8081);