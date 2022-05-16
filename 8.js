//Write a function that takes an array and swaps 2 elements of the array. Specify two Int - indexes of array elements.

function swap(arr, index1, index2) {
    let tmp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tmp;
}
let myArr = [1, 2, 3, 4, 7];
swap(myArr, 4, 0);
console.log(myArr);
