function ArrayModifier(input){

    let Array = input.shift().split(" ").map(Number);
    

    while(input[0] != "end"){
        let tokens = input.shift().split(" ");
        let command = tokens[0];

        let index1 = Number(tokens[1]);
        let index2 = Number(tokens[2]);

        switch (command) {
            case 'swap':
                let temp = Array[index1];
                Array[index1] = Array[index2];
                Array[index2] = temp;
                break;

                case 'multiply':
                    Array[index1] *= Array[index2];
                break;

                case 'decrease':
                 for (let i = 0; i < Array.length; i++) {
                     Array[i]--; 
                }
                break;
        }
       
    }
    console.log(Array.join(", "));
} ArrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ])
  