function canTheyBook(adultsCount = 0, childrenCount = 0, babiesCount = 0) {
    const hasEnoughSpace = adultsCount + childrenCount <= 8;
    const hasAdult = adultsCount > 0;
    const childrenQty = childrenCount + babiesCount;
    const hasEnoughAdult = childrenQty / adultsCount <= 2;
    const x = babiesCount <= 2 * adultsCount;

    console.log(hasEnoughSpace)
    return (hasEnoughSpace && hasAdult && hasEnoughAdult && x);
}

console.log(canTheyBook(4, 2, 4));

