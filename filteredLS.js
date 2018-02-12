var fs = require('fs');
var path = require('path');
var extenType = "." + process.argv[3];

fs.readdir(process.argv[2], (err,data) => {
    if(err){
        throw err;
    }
    
    for(i=0; i<data.length;i++){
        if(path.extname(data[i]) == extenType){
            console.log(data[i]);
        }
    }
})