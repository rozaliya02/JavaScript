function GladiatorExpenses(lostFights, helmetPrice, SwornPrice, shieldPrice, armorPrice) {

    let totalResult = 0;
    let counter = 0;

    for (let i = 1; i <= lostFights; i++) {
        counter++;
        if (counter % 2 === 0) {
            totalResult += helmetPrice;
        }
        if (counter % 3 === 0) {
            totalResult += SwornPrice;
        }

        if (counter % 6 === 0) {
            totalResult += shieldPrice;
        }

        if (counter % 12 === 0) {
            totalResult += armorPrice;
        }
    }

    console.log(`Gladiator expenses: ${totalResult.toFixed(2)} aureus`)
}
GladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200

)