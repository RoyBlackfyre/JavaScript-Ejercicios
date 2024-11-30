

const removeFromArray = function(ogArray,...numerosToRemove) {
    let newArray=[]
    for ( let element in ogArray){
        if(!numerosToRemove.includes(ogArray[element])){
            newArray.push(ogArray[element])
        }
    }
    return newArray
};

console.log(removeFromArray([1,2,3,4],3,2,4))

// Do not edit below this line
module.exports = removeFromArray;
