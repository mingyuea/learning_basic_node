var  myMod= require('./MIModularMod.js');

myMod(process.argv[2],process.argv[3], (err, list) => {
    if(err){
        return callback(err);
    }
    
    list.forEach((val)=>{
        console.log(val);
    });
});