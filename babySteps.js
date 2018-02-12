    var leng = process.argv.length;
    var sumTotal = 0;
    
    for(i=2;i<leng;i++){
        sumTotal = sumTotal+Number(process.argv[i]);
    }
    
    console.log(sumTotal);
    