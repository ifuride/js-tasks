//Write a function reverseAndNegate(arr) that takes an array of numbers and returns the reversed negative array.
//For example [1, -2, 5, 4] ⇒ [-4, -5, 2, -1]
function reverseAndNegate(arr) {
    return arr.reverse().map(value => -value);
}
let arr = [1, -1, 2, -2, -3];
let result = reverseAndNegate(arr);
console.log(result);
