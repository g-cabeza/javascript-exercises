const reverseString = function(word) {
    let strLength = word.length - 1;
    reversedWord ="";
for (strLength; strLength >= 0; strLength--){

    reversedWord+=word.at(strLength)
}
  return (reversedWord);
};

console.log(reverseString("Hello Motherfucker"));

// Do not edit below this line
module.exports = reverseString;