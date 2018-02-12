var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, callback){
    fs.readdir(dir, (err, files)=>{
        if(err){
            return  callback(err);
        }
        var fileArr =[];
        var extNew = "." + ext;
        files.forEach((filename) => {
            if(path.extname(filename) == extNew){
                fileArr.push(filename);
            }
        });
        
        return callback(null, fileArr);
    })
}