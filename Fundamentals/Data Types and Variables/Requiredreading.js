function Requiredreading(numberOfPages, pagesInHour, days) {
    let TotalTime = numberOfPages / pagesInHour;
    let RequeredHours = TotalTime / days;

    console.log(RequeredHours);

}
Requiredreading(
    212,
    20,
    2
)