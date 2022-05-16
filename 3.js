//Write a function repeatWord(word, count) that takes a word and a number of times to repeat.
//For example, if return repeatWord('word', 3), the function will print "word1, word2, word3, " in one line.
function repeatWord(word, count) {
    let result = '';
    for (let i = 1; i <= count; i++){
        result += word + i + ', ';
    }
    console.log(result);
    return result;
}
repeatWord('слово', 7);
