// const user = { // объект
//     name: "Jacob",
//     age: 30,
// }
// user.age = 44 // меняем возраст, доступ к значению через точку
// alert(user.age) // 44

// let user = {
//     name: "Jacob",
//     age: 30,
// }
// let key = prompt("Что вы хотите узнать о пользователе ?")
// alert(user[key])

// let str = 'ithub'
// alert(str.toUpperCase()) // ITHUB (делает все буквы большими)

// let str = 'JavaScript is nice'
// let newStr = str.length
// console.log(newStr)

// let summa = prompt('Сколько кг шишек собрал даня в лесу?')
// if (summa == 300){
//     alert('Абсолютно верно!')
// }
// else if (100 > summa){
//     alert('2')
// }
// else {
//     alert('lalala')
// }

// let result = условие ?значение1: значение2
// let accessAllowed = (age > 18)?true:false;

// let age = prompt('возраст?', 18)
// let message = (age < 3)?'Здравствуй, малыш!':
// (age < 18)?'Привет!':
// (age < 100)?'Здравствуйте!':
// 'Какой необычный возраст!'
// alert(message)

// const num = [11, 28, 34, 49, 75]
// num [4] = 1
// num [15] = 236
// console.log (num[11])
// console.log (num.length)

// let fruits = [
// "Яблоко", 
// "Апельсин",
// ]
// fruits.push("Груша")
// console.log(fruits)

// let fruits = [
//     "Яблоко",
//     "Апельсин",
//     "Груша",
// ]
// fruits.pop(fruits[0])
// console.log(fruits)

// let names = 'Вася. Петя. Маша'
// let arr = names.split('.')
// console.log(arr)

// let name = [
//     "Слава",
//     23,
//     true,
// ]
// console.log(name[0])
// console.log(name.length)

// let massive = [
//     "Игрок",
//     78,
//     false,
// ]
// console.log(massive)
// massive [1] = 23
// console.log(massive)

// let massive = [
//     "Чокопай",
//     "Чокобой",
//     "Сок",
// ]
// massive.push("F", "b")
// console.log(massive)
// console.log(massive.length)

// function greet() {
//     console.log( 'Всем привет!' )
// }
// greet()
// greet()

// let userName = 'Вася'
// function showMessage() {
//     let message = 'Привет, ' + userName
//     console.log(message)
// }
// showMessage()

// function greet(from, text) {
//     console.log(from + ': ' + text)
// }
// greet('Аня', "Привет!")
// greet('Аня', "Как дела?")
// greet()

// function sum() {
//     return a + b
// }
// let result = sum(3, 5)
// console.log( result )

// function checkAge(age) {
//     if (age >= 18) {
//         return true
//     } else {
//         return confirm( 'А родители разрешили?' )
//     }
// }
// let age = prompt('Сколько вам лет?', 18)

// if( checkAge(age) ) {
//     alert( 'Доступ получен' )
// } else {
//     alert( 'Доступ закрыт' )
// }

// let age = prompt('Сколько вам лет?', 18)
// let welcome = (age < 18) ?
// () => alert("Привет!") :
// () => alert("Здравствуйте!")
// welcome()

// const n=3
// function square(n) {
//     return n ** 2
// }
// let result = square(n)
// console.log(result)

// let sum = (n) => {
// return n**2
// }  

// console.log(sum(4))