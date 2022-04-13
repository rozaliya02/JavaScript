function HotelRoom(input) {

    let mounth = input[0];
    let nightCount = Number(input[1]);
    let AppartmentPrice = 0;
    let StudioPrice = 0;
    let diff = 0;
    let diffAp = 0;

    switch (mounth) {
        case "May":
        case "October":
            AppartmentPrice += 65;
            StudioPrice += 50;
            if(nightCount > 7 && nightCount <= 14){

                diff = 0.05;

            }else if (nightCount > 14){
                diff = 0.30;
            }
            break;
        case "June":
        case "September":
            AppartmentPrice += 68.70;
            StudioPrice += 75.20;
            
            if (nightCount > 14){
                diff = 0.20;
            }
            break;
        case "July":
        case "August":
            StudioPrice += 76;
            AppartmentPrice += 77;
            break;
        }

        if(nightCount > 14){
            diffAp = 0.10;
        }

        let totalAparmentPrice = nightCount * AppartmentPrice;
        let totalStudioPrice = nightCount * StudioPrice;

        let totalSumApartment = totalAparmentPrice - totalAparmentPrice * diffAp;
        let totalSumStudio = totalStudioPrice - totalStudioPrice * diff;

        console.log(`Apartment: ${totalSumApartment.toFixed(2)} lv.`)
        console.log(`Studio: ${totalSumStudio.toFixed(2)} lv.`)


        
}
HotelRoom(["May",
"15"])
