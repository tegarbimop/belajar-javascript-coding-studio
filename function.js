// FUNCTION
function namaFunction() {
    console.log("Hello World dari function.js");
}

namaFunction()

// argument dan parameter
function multiply(num1, num2) {
    console.log(num1 * num2)
}

multiply(5, 10)

// default parameter
function sayhello(name = "World") {
    console.log("Hello, " + name);
}

sayhello("Tegar")
sayhello() // ini akan memanggil default parameter yaitu "World" karena tidak ada parameter yang dikirimkan

// return statement
function calculate(x, y) {
    return x * y
}

console.log(calculate(5, 10)) // ini akan menampilkan hasil dari return statement yaitu 50

// keyword function
function keywordFunction() {
    console.log("keyword function")
}

keywordFunction()

// function expression
let functionExpression = function() {
    console.log("function expression")
}

functionExpression()

// arrow function
let arrowFunction = () => {
    console.log("arrow function")
}

arrowFunction()