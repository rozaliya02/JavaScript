function summerOutfit(input) {
    let degreeses = Number(input[0]);
    let time = input[1];
    let outfit = "";
    let shoes = "";

    if (degreeses >= 10 && degreeses <= 18) {
        switch (time) {
            case "Morning":
                outfit = "Sweatshirt";
                shoes = "Sneakers";
                break;
            case "Afternoon":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
        }
    }
    else if (degreeses > 18 && degreeses <= 24) {
        switch (time) {
            case "Morning":
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins";
                break;
            case "Afternoon":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;

        }
    } else if (degreeses >= 25) {
        switch (time) {
            case "Morning":
                outfit = "T-Shirt";
                shoes = "Sandals";
                break;
            case "Afternoon":
                outfit = "Swim suit";
                shoes = "Barefoot";
                break;
            case "Evening":
                outfit = "Shirt";
                shoes = "Moccasins"
                break;
        }

    }

    console.log(`It's ${degreeses} degrees, get your ${outfit} and ${shoes}.`);
}

summerOutfit(["20",
    "Morning"])

 
