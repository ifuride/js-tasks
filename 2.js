////Write a function getPercents(percent, number) that returns {percent} percent from {number}.
const getPercents = (percent, number) => {
    const result = number / 100 * percent;
    console.log(result);
    return result;
}
getPercents(30, 200);
