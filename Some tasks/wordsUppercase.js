function wordUpper(input){
    return input.match(/\w+/g).join(", ").toUpperCase()
}

console.log(wordUpper('Hi, how are you?'))