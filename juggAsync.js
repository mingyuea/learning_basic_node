var http = require('http');
var urlArr = process.argv.slice(2);
var dataArr = [];
var counter = 0;

for(let i=0;i<urlArr.length;i++){
    http.get(urlArr[i],(response)=>{
        var respStr = "";
        response.setEncoding('utf8');
        response.on('data',(data)=>{
            respStr += data;
        });
        response.on('end',()=>{
            dataArr[i] = respStr;
            counter++;
            
            if(counter == 3){
                dataArr.forEach((values)=>{
                    console.log(values);
                });
            }
        });
        
    });
}