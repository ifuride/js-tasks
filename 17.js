//Write a function that takes an array of numbers, and at first adds 4 to each even number, subtracts 2 from each odd number,
//then removes numbers from the array that are divided by 13 without a remainder and returns the sum of the remaining numbers.
function sum(arr) {
    let sum13 = 0;
    let sumEven = 0;
    let sumOdd = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 13 === 0) {
            sum13 =  sum13 + arr[i]
        } else if (arr[i] % 2 === 0) {
            let increasedNumber = arr[i] + 4;
            sumEven = sumEven + increasedNumber;
        } else if (arr[i] % 2 !== 0) {
            let reducedNumber = arr[i] - 2;
            sumOdd = sumOdd + reducedNumber;
        }
    }
    console.log(sumOdd);
    console.log(sumEven);
    return sumOdd + sumEven;
}
let myArr = [26, 12, 2, 3, 4];
let result = sum(myArr);
console.log(result);

