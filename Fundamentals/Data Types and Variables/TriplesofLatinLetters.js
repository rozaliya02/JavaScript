function TriplesofLatinLetters(n){
    
    let result = "";
    
    for(let i = 0; i < n ; i++ ){
        let first = String.fromCharCode(i + 97);

        for(let j = 0; j < n; j++){
            let second = String.fromCharCode(j + 97);

            for(let k = 0; k < n; k++){
                let thirth = String.fromCharCode(k + 97);
                result += `${first}${second}${thirth}\n`
            }

        
        }

    }

    console.log(result)

}
TriplesofLatinLetters(3)