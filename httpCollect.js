var http = require('http');

http.get(process.argv[2], (response)=>{
    response.setEncoding('utf8');
    var resLen = 0;
    var resWhole = "";
    response.on("data",(data)=>{
        resLen += data.length;
        resWhole += data;
    });
    response.on("error",(error)=>{
        throw error;
    });
    response.on("end", ()=>{
        console.log(resLen);
        console.log(resWhole);
    })
})