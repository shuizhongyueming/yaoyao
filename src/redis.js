var redis = require('redis').createClient();


function getPic(type,offset,num,response,callback){
    var setName = type === '1' ? 'fuli' : 'normal',
        num = parseInt(num,10),
        offset = parseInt(offset,10);

    console.log('ZRANGE '+setName+' '+offset+' '+(offset+num-1));
    console.log(offset,num,offset+num-1);

    // 减一是因为redis里面的ZRANGE key start end语法里面，start对应的value是会返回的
    // 为了得到需要的num，应该减去1
    redis.ZRANGE(setName,offset,offset+num-1,function(err,result){
        if(err){
            console.log('Error '+err);
            callback(null,response);
            return;
        }

        callback(result,response);
        console.log(result);
    });
}

exports.getPic = getPic;


function insertPic(type,score,value,callback){
    var setName = type === '1' ? 'fuli' : 'normal';

    console.log('ZADD '+setName+' '+score+' '+value);

    redis.ZADD(setName,score,value,function(){
        typeof callback === 'function' && callback(redis);        
    });
}

exports.insertPic = insertPic;

redis.on('error',function(err){
    if(err){
        console.log('Error: '+err.message);
        return;
    }
});

