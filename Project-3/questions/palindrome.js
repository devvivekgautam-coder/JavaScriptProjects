let str1 = 'nayan';
let reverseStr = str1.split('').reverse().join('');

console.log(reverseStr);

if (str1 == reverseStr) {
    console.log("It's Palindrome.");
}
else {
    console.log("It's Not Palindrome.");
}