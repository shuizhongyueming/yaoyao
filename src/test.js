/*

var http = require('http');

http.createServer(function(rq,rs){
    rs.writeHead(200,{'Content-Type':'text/html'});
    rs.write('Hello, World');
    rs.end();
}).listen(8080);

*/

var jf = require('jsonfile'),
    file = 'progress.json',
    jsonObj;

jf.readFile(file,function(err,obj){
    jsonObj = obj;
    console.log('First Loading File: ');
    console.log(obj);

    jsonObj.isProgressing = true;
    jsonObj.lastProgressTime = new Date().valueOf();

    jf.writeFile(file,jsonObj,function(err){
        if(err){console.log(err)};

        console.log('write file finish');

        jf.readFile(file,function(err,obj){
            console.log('after write,the origin file now is: ');
            console.log(obj);
        });
    });
});





