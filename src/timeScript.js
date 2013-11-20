/**
 * 需要定时运行的脚本
 * 此脚本的功能是：
 * 读取配置文件：progress.json
 * 判断配置中的isProgressing 是否为true
 *  如果是，直接return
 *  如果否，获取lastProgressing值和timeSelectRange值，取两个值之和
 *      如果大于当前时间的一小时之前，则用当前时间的前一小时
 *      如果小于等于，则用两值之和
 *  调用脚本getSqlToRedis.js中的方法，同时传入上面最终确定下来的时间值
 */

var jf = require('jsonfile'),
    access = require('./getSqlToRedis'),
    file = 'progress.json',
    jsonObj;

jf.readFile(file,function(err,obj){
    var lastTime,timeRange,
        // 允许的最大时间值，是为了防止抓取数据库数据的时候和管理员的操作产生冲突
        maxTime=new Date.valueOf()-1*60*60*1000;

    jsonObj = obj;
    console.log('First Loading File: ');
    console.log(obj);
    
    // 上一个时间的脚本仍在处理中
    if(jsonObj.isProgressing === true){
        return;
    }

    lastTime = jsonObj.lastProgressTime;
    timeRange = jsonObj.timeSelectRange;


    jsonObj.isProgressing = true;
    jsonObj.lastProgressTime = new Date().valueOf();

    jf.writeFile(file,jsonObj,function(err){
        if(err){console.log(err);return;}

        console.log('write file finish');

    });
});

