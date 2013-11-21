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
    file = 'progress.json',
    // 记录图片分类
    typeArr=['1','0'],
    getDataByTime = require('./mysql').getDataByTime,
    insertPic = require('./redis').insertPic;

function access(){

    var picType = typeArr[0];
    typeArr.splice(0,1);

    console.log('accessing type: '+picType);

    jf.readFile(file,function(err,jsonObj){
    
        var lastTime,timeRange,
            // 允许的最大时间值，是为了防止抓取数据库数据的时候和管理员的操作产生冲突
            // 设定时间为秒级，因为在进行数据库查询的时候，需要的是秒级的时间戳
            maxTime=parseInt(new Date().valueOf()/1000,10)-1*60*60,
            lastTime,
            timeRange,
            obj,
            endTime;

        if(err){console.log(err);return;}

        console.log('get json');
        console.log(jsonObj);
        obj = jsonObj[picType];

        console.log('当前操纵的数据:');
        console.log(obj);
    
        // 上一个时间的脚本仍在处理中
        if(obj.isProgressing === true){
            console.log('prev progress is still progressing, return');
            return;
        }



        lastTime = obj.lastProgressTime;
        timeRange = obj.timeSelectRange;

        if(!!lastTime === false){
            lastTime = parseInt(new Date().valueOf()/1000,10);
        }
    
        endTime = lastTime+timeRange;

        // 设定配置文件中为当前正在处理
        obj.isProgressing = true;
        obj.lastProgressTime = endTime;

        console.log('write back data:');
        console.log(jsonObj);        

        jf.writeFileSync(file,jsonObj);
        console.log('set progressing true');

        // 限定时间范围
        endTime = endTime > maxTime ? maxTime : endTime;

        getDataByTime(picType,lastTime,endTime,function(res,connection){
            console.log('get data from mysql success');
            console.log(res);
            var i=0,
                len=res.length,
                currObj;

            // 遍历从数据库获取的数据
            // 写到redis里面
            for(i;i<len;i++){
                currObj = res[i];
        
                if(i+1 === len){
                    insertPic(picType,currObj.id,currObj.url,function(redis){

                        // 判断是否还有没有遍历完的
                        // 有则继续工作
                        // 没有则更新配置文件，表明处理完毕
                        console.log('结束从mysql里面获取type为'+picType+'的图片插入到redis的操作');
                        obj.isProgressing = false;
                        jf.writeFileSync(file,jsonObj);
                        
                        if(typeArr.length){
                            access();
                        }else{
                            // 关闭和mysql的链接
                            connection.end();
                            
                            // 关闭和redis的链接
                            redis.end();
                            
                            console.log('所有操作结束');
                        }

                    });
                }
                insertPic(picType,currObj.id,currObj.url);
            }

        });


    });

}

access();
