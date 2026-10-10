// var let const itu klo console.log nya diatas deklarasi variabelnya, maka akan error (kecuali yg var tp undefined). tapi klo di bawah deklarasi variabelnya, maka tidak error.
// var let const (variable)
console.log("Hello, World exteral");

var varVariable = "Hello from var variable"
console.log(varVariable)

let letVariable = "Hello from let variable"
console.log(letVariable)

const constVariable = "Hello from const variable"
console.log(constVariable)


// undefined, null, 0, dan non-zero values adalah tipe data
let undefinedValue = "Hello from undefined variable"
console.log(undefinedValue)

let nullValue = "null"
console.log(nullValue)

let numberValue = 10
console.log(numberValue)

let stringValue = "hello"
console.log(typeof stringValue)

let booleanValue = true
console.log(booleanValue)
booleanValue = false
console.log(typeof booleanValue)

let objectValue = {
    key: "value",
    a:2
}
console.log(objectValue.key)
console.log(objectValue.a)


// ARITHMETIC OPERATOR
let num1 = 10, num2 = 5, num3 = 2

// +
console.log(num1 + num2)

// -
console.log(num1 - num2)

// *
console.log(num1 * num2)

// /
console.log(num1 / num3)

// **
console.log(num3 ** 2)

// % (sisa bagi)
console.log(num1 % num2)
console.log(num1 % 4)

// ++ (increment)
console.log(num1++) // tampilan num1 dulu baru ditambah 1
console.log(num1)   // tampilan num1 yang sudah ditambah 1
console.log(++num1) // tampilan num1 yang sudah ditambah 1 baru ditampilkan

// -- (decrement)
console.log(num1--) // tampilan num1 dulu baru dikurang 1
console.log(num1)   // tampilan num1 yang sudah dikurang 1
console.log(--num1) // tampilan num1 yang sudah dikurang 1 baru ditampilkan


// CONDITIONAL STATEMENTS
// ini ambil dari arithmatic operator di atas (let num1 = 10, num2 = 5, num3 = 2)
if (num1 < num2) {
    console.log("kondisi if benar")
} else if (num1 == num2) {
    console.log("kondisi else if benar")
} else {
    console.log("kondisi seluruh if salah")
}


// COMPARISON OPERATOR
let var1 = 10, var2 = "10", var3 = 5

// == (sama dengan)
if (var1 == var2) {
    console.log("if == benar")
}

// === (identik dengan)
if (var1 === var2) {
    console.log("if === benar")
} else {
    console.log("if === salah")
} 
// knp if === salah? karena === itu identik, jadi harus sama tipe datanya juga. var1 itu number, var2 itu string. jadi salah.

// != (tidak sama dengan)
if (var1 != var2) {
    console.log("if != benar")
} 

if (var1 !== var2) {
    console.log("if !== benar")
} 


// LOGICAL OPERATOR
// && (dan)
// var1, var2 dan var3 nya sama kyk yg di atas (let var1 = 10, var2 = "10", var3 = 5)
if (var1 > var3 && var1 == var2) {
    console.log("if && benar")
}

// || (atau)
if (var1 > var3 || var1 == var2) {
    console.log("if || benar")
}

