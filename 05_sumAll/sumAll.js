const sumAll = function(startNum,endNum) {
    if(startNum<0 || endNum<0 
        || Math.floor(startNum)!=startNum || Math.floor(endNum)!=endNum
        || typeof(startNum)!="number" || typeof(endNum)!="number"
        
    ){
        return 'ERROR'
    }
    
    let sum=0
    if(startNum<=endNum){
        for(let num=startNum;num<=endNum;num++){
            sum+=num
        }
        return sum
    }
    if(startNum>endNum){
        for(let num=endNum;num<=startNum;num++){
            sum+=num
        }
        return sum
    }
};

console.log(sumAll(4,1))


// Do not edit below this line
module.exports = sumAll;
