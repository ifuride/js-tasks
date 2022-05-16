//Write a function that takes an array of numbers, and at first adds 4 to each even number, subtracts 2 from each odd number,
//then removes numbers from the array that are divided by 13 without a remainder and returns the sum of the remaining numbers.
function sum(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            arr[i] = arr[i] - 2
        } else {
            arr[i] = arr[i] + 4
        }
    }
    let mySum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 !== 0) {
            mySum = mySum + arr[i]
        }
    }
    return mySum
}
console.log(sum([3, 15, 2, 3, 4]));
