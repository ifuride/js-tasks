//Write a function match that takes 2 strings and returns true if the strings are equal, case insensitive.
//For example, match('hEllO', 'HELLo') should return true.
function match(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase()
}
console.log(match('hello', 'HELLO'));