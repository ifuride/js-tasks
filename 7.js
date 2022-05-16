//Return true if array elements are sorted in ascending order, otherwise return false. The array contains only numbers.

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i-1]) {
            return false;
        }
    }
    return true;
}
console.log(isSorted([1,3,4,10]));

