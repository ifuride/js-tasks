//Write a function that takes an array and reverses it.

function reverse(arr) {
    let newArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
let myArr = [-1,0,1,2,3,4];
let reversedArr = reverse(myArr);
console.log(reversedArr);
