function Moving(input){

    let index = 0;
    let w = Number(input[index]);
    index++;
    let l = Number(input[index]);
    index++;
    let h = Number(input[index]);
    index++
    let command = input[index];

    let roomSpace = w * l * h;
    let roomUnspace = 0;

    while(command != "Done"){

        command=Number(input[index]);

        roomUnspace+=command;
        index++;
        command = input[index];
        if(roomUnspace > roomSpace){
            break;
        }
    }

    let diff = Math.abs(roomSpace - roomUnspace);

    if(roomSpace >= roomUnspace){
        console.log(`${diff} Cubic meters left.`)
    } else{
        console.log(`No more free space! You need ${diff} Cubic meters more.`)
    }

}
Moving(["10", 
"10",
"2",
"20",
"20",
"20",
"20",
"122"])	
// Потребителят въвежда следните данни на отделни редове:
//1.	Широчина на свободното пространство - цяло число в интервала [1...1000]
//2.	Дължина на свободното пространство - цяло число в интервала [1...1000]
//3.	Височина на свободното пространство - цяло число в интервала [1...1000]
//4.	На следващите редове (до получаване на команда "Done") - брой кашони, които се пренасят в квартирата - цели числа в интервала [1...10000];
//Функцията трябва да приключи прочитането на данни при команда "Done" или ако свободното място свърши.
//Изход
//Да се отпечата на конзолата един от следните редове:
//-	Ако стигнете до командата "Done" и има още свободно място:
//"{брой свободни куб. метри} Cubic meters left."
//-	Ако свободното място свърши преди да е дошла команда "Done":
//"No more free space! You need {брой недостигащи куб. метри} Cubic meters more."

