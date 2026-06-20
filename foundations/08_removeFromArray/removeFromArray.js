const removeFromArray = function(arr,rem) {

    return (arr.filter((arr) => arr !== rem));
    
};

testArray = [1,2,3,4] ;
testRemove = 3 ;

console.log(removeFromArray(testArray,testRemove));

// Do not edit below this line
module.exports = removeFromArray;
