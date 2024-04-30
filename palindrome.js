
const isPalindrome = function(word) {
    let reversed = word.split('').reverse().join('');
    return word === reversed;
};

let myArray = ['level','madam', 'cecarar', 'honda', 'malayalam'];
let palindromicWords = myArray.filter(isPalindrome);

console.log("Palindromic words in the array:");
console.log(palindromicWords);
