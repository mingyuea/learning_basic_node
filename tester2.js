var http = require('http');
var dataArr = [];

for(i=2;i<5;i++){
    var dataStr = "";
    http.get(process.argv[i], (response)=>{
        response.setEncoding('utf8');
        response.on('data',(data)=>{
            dataArr[2-i] = data;
        });
        response.on('end', ()=>{
            if(dataArr.length == 3){
                for(j=0;j<3;j++){
                    console.log(dataArr[j]);
                }
            }
        });
    });
    
    
}