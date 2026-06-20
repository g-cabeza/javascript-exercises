const sumAll = function(firstNumber, lastNumber) {

    let accumulator = 0;

    for (let i = firstNumber; i <= lastNumber; i++) {
        accumulator += i ;
    
    }

    return (accumulator) ;
};

startNumber = 1 ;
finishNumber = 4 ;

console.log (sumAll(startNumber, finishNumber));


// Do not edit below this line
module.exports = sumAll;
