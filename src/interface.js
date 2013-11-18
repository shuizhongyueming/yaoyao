var http = require('http'),
    url = require('url'),
    querystring = require("querystring"),
    sql = require('./redis');
    // queryString = require('queryString');

http.createServer(function(request,response){
/**
 * type 1 福利图 非1 普通图
 * offset 默认0 ，如果以此offset得到的数据长度为0，则重置offset为0，重新获取
 * num 默认是1，num的最大值会被maxNumPerRequest限定
 * set_no redis里面的set编号，暂时不用此参数
 * callback 有，则在返回消息中添加，没有则不添加
 * @type {[type]}
 */
    var maxNumPerRequest = 10,
        query = querystring.parse( url.parse(request.url).query ),
        type = query.type,
        offset = query.offset || 0,
        num  = query.num || 1,
        set_no = query.set_no,
        callback = query.callback;
/**
 * status
 *     1 成功
 *     
 * 
 */
    console.log('a query for pic is comming');

    console.log('param into getPic: offset==>'+offset+' num==>'+num);

    sql.getPic(type,offset,num,response,function(result,response){
        var data = {};
        response.writeHead(200,{'Content-Type':'application/x-javascript'});
        if(result === null){
            // 出错
            data.status = 0;
            data.data = '';
            data.set_no = set_no;
            data.offset = offset+num;
        }else{
            // 正常

            // 返回的数量少了，说明以及循环一圈，可以从头再来了
            if(result.length < num){
                data.offset = 0;
            }else{
                data.offset = parseInt(offset,10) + parseInt(num,10);
            }

            data.status = 1;
            data.data = result;
            data.set_no = set_no;
        }
        data.type = type;
        if(callback){
            data = callback+'('+JSON.stringify(data)+')';
        }else{
            data = JSON.stringify(data);
        }
        console.log('a img is response');
        response.write(data);
        response.end();
    });

/*
    if(query.type === '1'){
        
        sql.getFuliPic(offset,response,function(result,response){
            console.log('get fuli pic');
            var data = {};
            response.writeHead(200,{'Content-Type':'application/x-javascript'});
            if(result === null){
                // 出错
                data.status = 0;
                data.data = '';
                data.set_no = set_no;
                data.offset = offset;
            }else{
                // 正常
                data.status = 1;
                data.data = result;
                data.set_no = set_no;
                data.offset = parseInt(offset,10) + parseInt(num,10);
            }
            if(callback){
                data = callback+'('+JSON.stringify(data)+')';
            }else{
                data = JSON.stringify(data);
            }
            response.write(data);
            response.end();
        });
    }else{
        sql.getNormalPic(offset,response,function(result,response){
            console.log('get fuli pic');
            var data = {};
            response.writeHead(200,{'Content-Type':'application/x-javascript'});
            data.status = 0;
            data.data = result;
            response.write(JSON.stringify(data));
            response.end();
        });
    }*/

}).listen(8080);
