 
//Exercise 1

//create a new string from a given string taking the first 3 characters and last 3
//characters of a string and adding them together. the string length must be 3 or more, 
//if not, the original string is returned.

const makeNewString = (str) =>
    str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('abc'));
console.log(makeNewString('abcdef'));
console.log(makeNewString('abc123abc123'));

console.log(makeNewString('ab'));

//Exercise 2

//using JS programing Extract first half of a string of even length

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('elepha'));
console.log(firstHalf('elephant'));
console.log(firstHalf('elephants'));

//Exercise 3
//using JS concatenate two strings except their first character.

const  concatenate  = (str1, str2) =>
    str1.slice(1) + str2.slice(2);

console.log(concatenate('abc', 'def'));
console.log(concatenate('Junior', 'Developer'));

//Exercise 4
//Given two values, write a JS program to find out Which one is 
//nearest to 100

const closeTo100 = (a,b) => (100 - a) < (100 - b) ? a : b;

console.log(closeTo100(99, 1));
console.log(closeTo100(49, 51));
console.log(closeTo100(50, 50));

//Exercise 5
//write JS programing to check a string contains 2 to 4 occurence
// of a specified character. 

const countChars = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const contains2To4 = (str, char) =>
    countChars(str, char) >= 2 && countChars(str, char) <= 4;

console.log(contains2To4('ooh!', 'o'));
console.log(contains2To4('oh!', 'o'));
console.log(contains2To4('oooh!', 'o'));
console.log(contains2To4('ooooh!', 'o'));
console.log(contains2To4('oooooh!', 'o'));

