function RightPlace(word, char, match) {

    let res = word.replace("_", char);
    if(res == match){
        console.log("Matched");
    } else{
        console.log("Not Matched");
    }
}
RightPlace('Str_ng', 'i', 'String')