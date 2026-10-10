// DOM (Document Object Model) adalah representasi dari struktur dokumen HTML atau XML dalam bentuk objek. Dengan DOM, kita dapat mengakses dan memanipulasi elemen-elemen dalam dokumen menggunakan JavaScript.
// DOM Manipulation Finding HTML Elements
let el = document.getElementById("div-1")
console.log(el)

let el2 = document.getElementsByTagName("div") // Mengambil elemen div pertama
console.log(el2) // consol.log(el) [o] mau isi 0, 1, 2 terlihat semua div yang ada di html

let el3 = document.getElementsByClassName("div-2") // Mengambil elemen div pertama
console.log(el3) 

// QUERY SELECTOR
let el4 = document.querySelector("#div-1") // Mengambil elemen div pertama
console.log(el4) 

let el5 = document.querySelector("div") // Mengambil semua elemen div
console.log(el5)
el5.innerHTML = "<p>Hello World</p>" // Mengubah isi dari elemen div pertama

let el6 = document.querySelector("#div-2") // Mengambil semua elemen div dengan class div-2
console.log(el6)


// DOM MANIPULATION CHANGING HTML ELEMENTS
let input = document.getElementById("input")
console.log(input)

// input.setAttribute("type", "checkbox") // Mengubah atribut type dari input menjadi checkbox
let input2 = document.getElementById("input")
input2.style.borderColor = "red" // Mengubah border color dari input menjadi merah
input2.style.color = "blue" // Mengubah warna teks dari input menjadi biru


// DOM EVENTS
const hello = document.getElementById("hello")

hello.addEventListener("mouseenter", function() {
    console.log("Mouse Enter hello world")
    hello.style.border = "1px solid red"
})

const btn = document.getElementById("btn")
btn.addEventListener("click", function() {
    console.log("Button Clicked")
    const boom = document.getElementById("boom")
    boom.style.display = "block"
})