function roomPainting(input) {
    let paintBox = Number(input[0]);
    let paperRolls = Number(input[1]);
    let gloovesPrice = Number(input[2]);
    let brushPrice = Number(input[3]);

    let paintPrice = 21.50 * paintBox;
    let paperRollsPrice = 5.20 * paperRolls;
    let gloovesCount = Math.ceil((35 / 100) * paperRolls);
    let brushCount = Math.floor((48 / 100)* paintBox);
    let totalgloovesPrice = gloovesCount * gloovesPrice;
    let totalBrushPrice = brushCount * brushPrice;
    let totalSum = paintPrice + paperRollsPrice + totalgloovesPrice + totalBrushPrice;
    let deliveryPrice = 1/15 * totalSum;

    console.log(`This delivery will cost ${deliveryPrice.toFixed(2)} lv.`);

}
roomPainting(['21',
    '18',
    '5',
    '2.2'
])