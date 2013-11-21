var mysql = require('mysql'),
    db_config = {
        host:'192.168.5.64',
        user:'root',
        password:'root',
        database:'yaoyao'
    };
var connection = mysql.createConnection(db_config);



/*

function getPic(type,offset,num,response,callback){
    var tableName = type === '1' ? 'fuli' : 'normal',
        queryStr = 'SELECT url FROM '+tableName+' WHERE id > '+mysql.escape(offset)+' LIMIT '+mysql.escape(num);
    console.log(queryStr);
    pool.getConnection(function(err,connection){
        connection.query(queryStr,function(err,result){
            if(err){
                console.log(err.message);

                // 出错的时候，定义result为null传递给回调
                callback(null,response);
                return;
            }
            callback(result,response);
            connection.release();
        });
    });
}

exports.getPic = getPic;

*/
// console.log(pool);

connection.connect();

function getDataByTime(type,beginTime,endTime,callback){
    var tableName = type === '1' ? 'fuli' : 'normal',
        queryStr = 'SELECT id,url FROM '+tableName+' WHERE UNIX_TIMESTAMP(upTime) BETWEEN '+mysql.escape(beginTime)+' AND  '+mysql.escape(endTime);

    console.log(queryStr);


    connection.query(queryStr,function(err,result){
       if(err){
           console.log(err);
           return;
       }
       callback(result,connection);
   });

}

connection.on('error',function(err){
    console.log(err);
});

exports.getDataByTime = getDataByTime;

/*
connection.connect();
connection.query('SELECT id,url FROM fuli',function(err,result){
    console.log(result);
    connection.end();
});
*/


/*
function getNormalPic(offset,response,callback){
    var connection = mysql.createConnection(db_config);
    var query = connection.query('SELECT url FROM fengjing WHERE id > ? LIMIT 5',[offset],function(err,result){
        if(err){
            console.log(err.message);

            // 出错的时候，定义result为null传递给回调
            callback(null,response);
            return;
        }
        callback(result,response);
    });
    console.log(query.sql);
    connection.end();
}

exports.getNormalPic = getNormalPic;

function getFuliPic(offset,response,callback){
    var connection = mysql.createConnection(db_config);
    var query = connection.query('SELECT url FROM fuli WHERE id > ? LIMIT 1',[offset],function(err,result){
        if(err){
            console.log(err.message);
            callback(null,response);
            return;
        }
        callback(result,response);
    });
    console.log(query.sql);
    connection.end();
}

exports.getFuliPic = getFuliPic;

*/

/*
var id = 14;
function changeData(){
    connection.query('SELECT url FROM fuli WHERE id = ?',[id],function(err,result){
        var url;

        if(result.length){
            url=result[0].url;
            connection.query('UPDATE fuli SET url = ? WHERE id = ?',['fuli/'+url,id],function(err,result){
                console.log('add fuli/ for url at table fuli in line: '+id);
                id++;
                changeData();
            });
        }else{
            console.log('finish');
            connection.end();
        }    
    });    
}

changeData();*/



/*connection.connect(function(err){
    if(err){
        console.log('Connect MySQL with error: '+err.message);
        return;
    }

    console.log('Connected MySQL');


});*/
/*
var query = connection.query('SELECT url FROM fuli WHERE id > ? LIMIT 5',[1],function(err,rows,fields){
    if(err) throw err;

    console.log(rows);
});


console.log(query.sql);
connection.end();*/
/*
connection.query("INSERT INTO fuli(url,status,cTime) VALUES ('Grass Blades.jpg',1,NOW())",function(err,result){
    if(err) throw err;

    console.log(result.insertId);
});

connection.query('SELECT url FROM fuli',function(err,rows,fields){
    if(err) throw err;

    console.log(rows);
});
*/

