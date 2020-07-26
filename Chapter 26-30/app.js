// Write a program that takes a positive integer from user & display the following in your browser
// var number = +prompt('Enter positive integer')
// var round = Math.round(number)
// var floor = Math.floor(number)
// var ceil = Math.ceil(number)
// document.write(`Number is : ${number} <br/>`)
// document.write(`Round number is : ${round} <br/>`)
// document.write(`Floor number is : ${floor} <br/>`)
// document.write(`Ceil number is : ${ceil} <br/>`)

//Write a program that takes a negative floating point number from user & display
// var number = +prompt('Enter negative floating point number')
// var round = Math.round(number)
// var floor = Math.floor(number)
// var ceil = Math.ceil(number)
// document.write(`Number is : ${number} <br/>`)
// document.write(`Round number is : ${round} <br/>`)
// document.write(`Floor number is : ${floor} <br/>`)
// document.write(`Ceil number is : ${ceil} <br/>`)

//Write a program that displays the absolute value of a number
// var number = +prompt('Enter value to get absolute value')
// var absolute = Math.abs(number)
// document.write(`Absolute value is : ${absolute} <br/>`)

//Write a program that simulates a dice using random() method of JS Math class
// var num = 0 
// var random = Math.floor(Math.random(num)* 101)
// document.write(`Random dice value is : ${random} <br/>`)

//Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browse
// var num = 1 
// var random = Math.floor(Math.random(num)* 3) 
// var coin;
// if(random === 1){
//     coin = 'Tails'
// }else if (random === 2){
//     coin = 'Heads'
// }else{
//     coin = ''
// }
// document.write(`Random dice value is : ${random} <br/>`)
// document.write(`Random dice value is : ${coin} <br/>`)

//Write a program that shows a random number between 1 and 100 in your browser.
// var num = 0 
// var random = Math.floor(Math.random(num)* 101)
// document.write(`Random dice value is : ${random} <br/>`)

//Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. 
// var weight = prompt('Enter your weight in kilogram')
// document.write('The weight of the user is : ' + weight)

//Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user
var num = prompt('Enter number between 1 and 10')
var random = Math.floor(Math.random(num)* 11)
console.log(random)
if(num === random){
    alert('Congratulation your value is correct')
}else{
    alert('Try again')
}

