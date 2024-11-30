
const reverseString = function(stringOg) {
    let stringArray=stringOg.split("")
    let stringRev=""
    for (let letter=stringArray.length-1; letter>=0;letter--){
        stringRev+=stringArray[letter]
        
    }
    return (stringRev)

};

// Do not edit below this line
module.exports = reverseString;
