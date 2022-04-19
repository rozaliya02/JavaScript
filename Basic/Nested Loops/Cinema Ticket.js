function cinemaTickets(input) {

    let index = 0;
    let command = input[index];
    index++;

    let standardCounter = 0;
    let studentCounter = 0;
    let kidsCounter = 0;
    let totalTicketCounter = 0;

    while (command !== 'Finish') {
        let name = command;
        let freeSpace = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;
        let ticketCounter = 0;

        while (ticketType !== 'End') {
            ticketCounter++;
            switch (ticketType) {
                case 'standard': standardCounter++; break;
                case 'student': studentCounter++; break;
                case 'kid': kidsCounter++; break;


            }
            if (ticketCounter >= freeSpace) {
                break;

            }
            ticketType = input[index];
            index++;
        }
        totalTicketCounter += ticketCounter;
        let res = ticketCounter / freeSpace * 100
        console.log(`${name} - ${res.toFixed(2)}% full.`)
        command = input[index];
        index++;
    }
    let studentTickets = studentCounter / totalTicketCounter * 100
    let kidsTickets = kidsCounter / totalTicketCounter * 100
    let standardTickets = standardCounter / totalTicketCounter * 100
    console.log(`Total tickets: ${totalTicketCounter}`);
    console.log(`${studentTickets.toFixed(2)}% student tickets.`);
    console.log(`${standardTickets.toFixed(2)}% standard tickets.`);
    console.log(`${kidsTickets.toFixed(2)}% kids tickets.`);
} 
cinemaTickets(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"])	
