var fs = require('fs');
var NLcount = 0;

function RFasync(callback){
    fs.readFile(process.argv[2], 'utf8', function asyncRead(err, data){
        NLcount = data.split('\n').length -1;
        callback()
    });
}

function logNLcount(){
    console.log(NLcount);
}

RFasync(logNLcount);