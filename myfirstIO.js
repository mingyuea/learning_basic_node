var fs = require('fs');

var bufferObj = fs.readFileSync(process.argv[2]);
var NLregexp = /\n/g;
var NLcount = bufferObj.toString().split(NLregexp).length - 1;

console.log(NLcount);