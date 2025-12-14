// sentence = "This is a sample sentence. This sentence is for the Python exercise."
// result = count_words(sentence)
// print(result)

function coutnWords (sentence){
    return sentence.split(" ").length;
}

console.log(coutnWords("This is a sample sentence. This sentence is for the Python exercise."));

    // string_with_special_characters = "$700.50 E"
    // result = extract_float_from_string(string_with_special_characters)
    // print(result)

    function extract_float_from_string(str){
        let arrStr = str.split("")
        let arrNum = []

        for (let index = 0; index < array.length; index++) {
          if(typeof arrStr[index] === number) {
            arrNum.push(arrStr[index])
          } 
        }
        return number(arrNum.join(""))
    }