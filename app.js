var express = require('express');
var app = express();
var accepts = require('accepts');
var useragent = require('express-useragent');
var PORT = process.env.PORT || 4998;
var resJson = {};

app.get('*', function(req, res){
    //console.log(req.ip);
    var source = req.headers['user-agent'], ua = useragent.parse(source);
    //console.log(JSON.stringify(ua));
    //console.log(ua.os);
    var accept = accepts(req);
    //console.log(accept.language()[0]);
    //console.log(req.connection.remoteAddress);
    resJson.ipaddress = req.headers['x-forwarded-for'].split(",")[0];
    resJson.os = ua.os;
    resJson.language = accept.language()[0];
    res.status(200).json(resJson);
    //console.log(JSON.stringify(req.headers));
});


app.listen(PORT);
