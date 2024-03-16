// console.log("Start")

// let a = 1
// const b = 2
// a = 2
// let mama = "mother"
// const papa = "alex"
// let nomer = "2"
// console.log(a)
// console.log("a")

// console.log(a+b+a)
// console.log(10+23+a)
// console.log(mama+2+papa)

// console.log(nomer+2-2)

// console.log("2"+2)
// console.log(2+"2"-2)
// console.log(mama-2)
// // Nan - Not A Number
// // undefined
// // True/False
// console.log("2"==2)
// console.log(papa.length)
// console.log(papa.indexOf("l"))

// let A = 2

// if (A == 2)(
//     let result = A*A
// )






// let userAnswer = +prompt("chislo vvedi")
// console.log(typeof(userAnswer))

// if (isNaN(userAnswer)){
//     confirm("help")
//     alert("plesae")

// }



// const button = document.getElementById('multiply')
// const firstNum = document.getElementById('firstNum')
// const secondNum = document.getElementById('secondNum')

// function multiply(){
//     let result = firstNum.value * secondNum.value
//     console.log(result)
// }

// button.addEventListener('click', multiply)






// const button1 = document.getElementById('divide')
// const firstNum1 = document.getElementById('firstNum1')
// const secondNum1 = document.getElementById('secondNum1')

// function divide(){
//     let result = firstNum1.value / secondNum1.value

//     if (secondNum1.value == 0){
//         let result2 = "На ноль не делиться гуний"
//         console.log(result2)
//     }
//     else{
//         console.log(result)
//     }
// }

// button1.addEventListener('click', divide)






// const button2 = document.getElementById('add')
// const firstNum2 = document.getElementById('firstNum2')
// const secondNum2 = document.getElementById('secondNum2')

// function add(){
//     let result = parseInt(firstNum2.value) + parseInt(secondNum2.value)
//     console.log(result)
// }

// button2.addEventListener('click', add)









// const button3 = document.getElementById('minus')
// const firstNum3 = document.getElementById('firstNum3')
// const secondNum3 = document.getElementById('secondNum3')

// function minus(){
//     let result = firstNum3.value - secondNum3.value
//     console.log(result)
// }

// button3.addEventListener('click', minus)




// const button4 = document.getElementById('sqrt')
// const firstNum4 = document.getElementById('firstNum4')

// function sqrot(){
//     let result = Math.sqrt(firstNum4.value)
//     console.log(result)
// }

// button4.addEventListener('click', sqrot)



let post = "1234qwerty@gmail.com"

// console.log(post.length)

if (isNaN(Number(post.charAt(0)))) {
    console.log("first argument is not a number")
}
console.log(post.indexOf("@gmail.com"))
if (post.indexOf("@gmail.com")>0){
    console.log("thats gmail")
}
// console.log("A"==("a").toUpperCase())
// let a = "baNaNas"

// console.log(a.toLowerCase())
// console.log(a.toUpperCase())
console.log(post.includes(" "))
console.log(post.includes("@"))
console.log(post.includes("."))
console.log(post.includes("com"))

if (post.indexOf("l") > 0){
    console.log("true")
}

