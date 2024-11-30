const repeatString = function(string,num) {
    if(num<0){
        return ('ERROR')
    }else{
        let theString = ""
        for(let word=1;word<=num;word++){
            theString += string
        }
        return theString
    }

};

// Do not edit below this line
module.exports = repeatString;
