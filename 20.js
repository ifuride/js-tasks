//Write a function transformUpvotes(arr) that takes an array of shortened records of likes quantity
//['10k', '2.3k', '5k', '32', '28.4k'] and returns an array of numbers [10000, 2300, 5000, 32, 28400].
function transformUpvotes(arr) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('k')) {
            const number = arr[i].slice(0, -1);
            newArr.push(number * 1000);
        } else {
            newArr.push(Number(arr[i]))
        }
    }
    return newArr
}
console.log(transformUpvotes(['10k', '2.3k', '5k', '32', '28.4k']));

//#2
const transformUpvote = strVal => {
    if (strVal.includes('k')) {
        const number = strVal.slice(0, -1);
        return number * 1000;
    }
    return Number(strVal)
}
//console.log(['10k', '2.3k', '5k', '32', '28.4k'].map(transformUpvote));
