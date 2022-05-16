//Create a function getMonth(n) that takes a month number and returns its name.
//For example getMonth(12) ⇒ 'December'. Use if/else
function getMonth(n) {
    if (n === 1) return 'january';
    if (n === 2) return 'february';
    if (n === 3) return 'march';
    if (n === 4) return 'april';
    if (n === 5) return 'may';
    if (n === 6) return 'june';
    if (n === 7) return 'juky';
    if (n === 8) return 'august';
    if (n === 9) return 'september';
    if (n === 10) return 'october';
    if (n === 11) return 'november';
    if (n === 12) return 'december';
    else return 'not a month';
}
console.log( getMonth(13) );
