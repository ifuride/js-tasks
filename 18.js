//Write a function that takes an array of numbers, and at first adds 4 to each even number, subtracts 2 from each odd number,
//then removes numbers from the array that are divided by 13 without a remainder and returns the sum of the remaining numbers.
const calculate = (arr) => {
    return arr
        .map(v => v % 2 === 0 ? v + 4 : v - 2)
        .filter(v => !(v % 13 === 0))
        .reduce((a, b) => a + b, 0)
}

console.log(calculate([15, 2, 3, 5, 6]))
