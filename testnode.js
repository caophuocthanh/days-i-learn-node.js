function cong(number1, number2, callback) {
    callback(number1 +  number2)
    return number1 + number2
}

var a = cong("ghfhgfh", 4, function(result) {
    console.log("Result:", result)
});
console.log("jgfgjgj:", a)





