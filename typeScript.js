//// Define a function, that takes string as argument and prints "Hello, %arg%!"
function enter1(arg) {
    return "Hello, %" + arg + "%!";
}
/// Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4])
// should return 24.
function sum(arg) {
    return arg.reduce(function (lastValue, curr) { return lastValue + curr; });
}
function multiply(arg) {
    return arg.reduce(function (lastValue, curr) { return lastValue * curr; });
}
/// Define a function reverse() that computes the reversal of a string.
// For example, reverse("I am testing") should return the string "gnitset ma I".
function reverse(str) {
    return str.split('').reverse().join('');
}
// Define a function isPalindrome() that recognizes palindromes (i.e. words that look the same written backwards).
// For example, isPalindrome("radar") should return True.
function isPalindrome(str) {
    return str.split('').reverse().join('').toLocaleLowerCase() === str.toLocaleLowerCase();
}
// Define a procedure histogram() that takes an array of integers and prints a histogram to the screen.
// For example, histogram([4, 9, 7]) should print the following:
function histogram(arr) {
    arr.forEach(function (val) {
        console.log("*".repeat(val));
    });
}
// Define a function caesarCipher that takes string and key(number), whuch returns encrypted string
function caesarCipher(str, key) {
    return str.toLocaleLowerCase().split('').map(function (val) {
        return String.fromCharCode((val.charCodeAt(0) + key) > 122 ? val.charCodeAt(0) + key - 26 :
            val.charCodeAt(0) + key);
    }).join('');
}
