//Write a function that checks whether the number is narcissistic (153 = 1^3 * 5^3 + 3^3 should return true).

function narcissistic(value) {
    let a = value;
    let digits = 0;
    while (a > 0) {
        a = Math.floor(a / 10);
        digits = digits + 1;
    }
    let b = value;
    let sum = 0;
    while(b > 0) {
        let n = b % 10;
        b = Math.floor(b / 10);
        sum = sum + n ** digits;
    }
    return sum == value;
}
console.log(narcissistic(153));