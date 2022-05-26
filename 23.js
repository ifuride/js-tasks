//You will be given a number and you will need to return it as a string in Expanded Form.
//For example: expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
    let numArr = num.toString().split('');
    let newNumArr = [];
    for (let i = 0; i < numArr.length; i++ ) {
        if (numArr[i] == 0) {
            continue
        }
        let newNum = numArr[i] * (Math.pow(10, numArr.length - i - 1));
        newNumArr.push(newNum);
    }
    return newNumArr.join(' + ')
}

console.log(expandedForm(2034));
