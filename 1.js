//Напишите функцию countDown(n), которая получает число {n} в качестве аргумента и
//печатает в консоль обратный отсчет начиная с этого числа. Например countDown(3) напечатает: 3 2 1
//Write a function countDown(n) that takes the number {n} as an argument 
//and prints a countdown starting from that number to the console. For example countDown(3) will print: 3 2 1
function countDown(n) {
    for (let i = n; i >= 1; i = i - 1) {
        console.log(i)
    }
}
countDown(5);
