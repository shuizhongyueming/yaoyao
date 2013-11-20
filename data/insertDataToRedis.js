var redis =  require('redis'),
    client = redis.createClient();


var arrNormal = ["134L2Z3V44P.jpg","10058503.jpg","10070349.jpg","10130060.jpg","10133600.jpg","10133746.jpg","10288686.jpg","201215645.jpg","20120515140940384.jpg"],
    arrFuli = ["10088939.jpg","10091646.jpg","10103425.jpg","10172284.jpg","79111124151258.jpg","2013060315403577.jpg","20131116151158001.jpg",
                "20131116151159111.jpg","201306221342271097.jpg"],
    i,len;


client.on('error',function(err){
    console.log('Error '+err);
});
/*
client.ZADD('fuli','1','adfsadf.jpg');
console.log('zadd finish');
//client.end();
*/

for(i=0,len=arrNormal.length;i<len;i++){

    client.ZADD('normal',i+1,arrNormal[i],function(err,reply){
        console.log(reply);
    });

    console.log('ZADD normal '+(i+1)+' '+arrNormal[i]);
}


for(i=0,len=arrFuli.length;i<len;i++){

    client.ZADD('fuli',i+1,arrFuli[i],function(err,reply){
        console.log(reply);
    });

    console.log('ZADD fuli '+(i+1)+' '+arrNormal[i]);

    if((i+1)==9){
        //client.end();
        console.log('ZADD finish');
    }
}

