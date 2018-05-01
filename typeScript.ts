//// Define a function, that takes string as argument and prints "Hello, %arg%!"
function enter1(arg:string):string {
    return `Hello, %${arg}%!`;
}

/// Define a function sum() and a function multiply() that sums and multiplies (respectively)
// all the numbers in an array of numbers. For example, sum([1, 2, 3, 4]) should return 10, and multiply([1, 2, 3, 4])
// should return 24.
function sum(arg:number[]):number {
    return arg.reduce((lastValue, curr) => lastValue + curr);
}

function multiply(arg:number[]):number {
    return arg.reduce((lastValue, curr) => lastValue * curr);
}

/// Define a function reverse() that computes the reversal of a string.
// For example, reverse("I am testing") should return the string "gnitset ma I".

function reverse(str:string):string {
    return str.split('').reverse().join('');
}

// Define a function isPalindrome() that recognizes palindromes (i.e. words that look the same written backwards).
// For example, isPalindrome("radar") should return True.

function isPalindrome(str:string):boolean {
    return str.split('').reverse().join('').toLocaleLowerCase() === str.toLocaleLowerCase();
}

// Define a procedure histogram() that takes an array of integers and prints a histogram to the screen.
// For example, histogram([4, 9, 7]) should print the following:

function histogram(arr:number[]):void {
    arr.forEach(val => {
       console.log("*".repeat(val));
    });
}

// Define a function caesarCipher that takes string and key(number), whuch returns encrypted string

function caesarCipher(str:string, key:number):string {
        return str.toLocaleLowerCase().split('').map(val => {
           return String.fromCharCode((val.charCodeAt(0) + key) > 122 ? val.charCodeAt(0) + key - 26 :
               val.charCodeAt(0) + key);
        }).join('');
}

// define a function diagonalReverse() that takes matrix and returns diagonal-reversed one:

function diagonalReverse(arr:number[][]):number[][] {
    let result:number[][] = [];
    arr.forEach((innerArr, i) => {
        let tempArr: number[] = [];
        innerArr.forEach((val, j) => {
            tempArr.push(arr[j][i])
        });
        result.push(tempArr);
    });
    return result
}

//USAGE
//console.log(diagonalReverse([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]));

// Write a function game() number-guessing game, that takes 2 int parameters defining the range.
// Using some kind of random function to generate random int from the range. 
// While user input isn't equal that number, print "Try again!". If user guess the number, congratulate him and exit.
/*
let param1 = +prompt('Enter min value');
let param2 = +prompt('Enter max value');
function game(param1:number, param2:number):void {
    if (param1 - Math.floor(param1) !== 0 || param2 - Math.floor(param2) !== 0) return;
    let random = Math.floor(Math.random() * (param2 - param1 + 1) + param1);
    let userAnswer = +prompt("Enter number");
    while (random !== userAnswer) {
        console.log('Try again!')
        userAnswer = +prompt("Enter number");
    }
}
// game(param1,param2);
*/

//Define a function, which takes a string with N opening brackets ("[") and N closing brackets ("]"),
// in some arbitrary order.
// Determine whether the generated string is balanced; that is,
// whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest
function brackets(str:string):string {
    let arr:string[] = str.split('');
    while (arr.length > 1 && arr[0] !== ']' && arr[arr.length - 1] !== '[') {  //find pair '[]' and delete it from array
                arr.splice(0, 1);
                arr.splice(arr.indexOf(']'), 1);
    }
    return arr.length === 0 ? 'OK' : 'NOT OK';
 }

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it.
// Represent the frequency listing as a Python dictionary.
// Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").

function charFreq(str:string):object {
    let result:object = {};
    str.toLocaleLowerCase().split('').forEach(val =>{
       result[val] ? result[val] += 1 : result[val] = 1;
    });
    return result;
}

// Write a function decToBin() that taces decimal integer and outputs its binary representation.

// USING NATIVE FUNCTION
function decToBin(int:number):string {
    if (Math.floor(int) - int !== 0 && int >= 1) return;
    return int.toString(2);
}

// WITHOUT NATIVE FUNCTION
function decBin(int:number):string {
    if (Math.floor(int) - int !== 0 && int >= 1) return;
    if (int === 1) return '1';
    let str:string = '';
    while (int / 2 >= 1) {
        str += (int % 2);
        int = Math.floor(int / 2);
        if (int === 1) str += 1;
    }
    return str.split('').reverse().join('');
}
