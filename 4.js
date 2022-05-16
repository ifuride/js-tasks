//Write a function createAdder(a), that returns a function addA, that takes b and returns a + b.

function createAdder(a) {
    return function addA(b) {
        return a + b;
    }
}
const result = createAdder(5);
console.log(result(3));
