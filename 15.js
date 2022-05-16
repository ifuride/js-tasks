//Write a function reverseAndNegate(arr) that takes an array of numbers and returns the reversed negative array.
//For example [1, -2, 5, 4] ⇒ [-4, -5, 2, -1]
function reverseAndNegate(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * -1
    }
    for (let i = 0; i < arr.length - i - 1; i++) {
        let tmp = arr[i]
        arr[i] = arr[arr.length - i - 1];
        arr[arr.length - i - 1] = tmp;
        console.log(i, arr.length - i - 1)
    }
}
let arr = [1, -1, 2, -2, -3];
reverseAndNegate(arr);
console.log(arr);
