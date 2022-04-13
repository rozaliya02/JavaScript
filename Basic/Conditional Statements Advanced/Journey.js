function Journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let typeJourney = "";
    let journeyPrice = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                journeyPrice = budget * 0.30;
                typeJourney = "Camp";
                break;
            case "winter":
                journeyPrice = budget * 0.70;
                typeJourney = "Hotel";
                break;
        }
    } else if(budget <= 1000 && budget > 100){
        destination = "Balkans";
        switch (season) {
            case "summer":
                journeyPrice = budget * 0.40;
                typeJourney = "Camp";
                break;
            case "winter":
                journeyPrice = budget * 0.80;
                typeJourney = "Hotel";
                break;
        }
    } else if(budget > 1000){
        destination = "Europe"
        switch (season) {
            case "summer":
                journeyPrice = budget * 0.90;
                typeJourney = "Hotel";
                break;
            case "winter":
                journeyPrice = budget * 0.90;
                typeJourney = "Hotel";
                break;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeJourney} - ${journeyPrice.toFixed(2)}`);
}
Journey(["678.53", "winter"])

