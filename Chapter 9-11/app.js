//Write a program to take “city” name as input from user
// var a = prompt('Enter city')
// document.write('Welcome to ' + a)
// if(a==='Karachi'){
// document.write('Welcome to city of lights')
// }

// Write a program to take “gender” as input from user
// var a = prompt('Enter Gender')
// if(a==='Male'){
//     document.write('Hello Sir')
// }else{
//     document.write('Hello Madam')
// }

//Write a program to take input color of road traffic signal
// var a = prompt('Enter color')
// if(a==='Red'){
//     document.write('Must Stop')
// }else if(a==='Yellow'){
//     document.write('Ready to move')
// }else{
//     document.write('Move now')
// }

//Write a program to take input remaining fuel in car 
// var a = prompt('Enter remaining fuel')
// if(a< '0.25'){
//     document.write('Please refill the fuel in your car')
// }

//Run the script
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

//The script is not correct
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

//Condition 2 and 4 is correct
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }else if (true) {
//     alert("True");
// }else if (false) {
//     alert("False");
// }else if ("car" < "cat") {
//     alert("car is smaller than cat");
// }

//MarkSheet
// var a = prompt('Enter marks in 1st subject')
// var b = prompt('Enter marks in 2nd subject')
// var c = prompt('Enter marks in 3rd subject')
// var d = prompt('Enter total marks')
// var per = Math.floor((a+b+c/d)*100)

// document.write('<h1>Mark Sheet</h1>' + '<br/>')
// document.write('Total Marks : ' + d + '<br/>')
// document.write('Percentage : ' + per + '<br/>')
// if(per>=80){
//     document.write('Grade : A-one' + '<br/>')
//     document.write('Remarks : Excellent')
// }else if(per>=70){
//     document.write('Grade : A' + '<br/>')
//     document.write('Remarks : Good')
// }else if(per>=60){
//     document.write('Grade : B' + '<br/>')
//     document.write('Remarks : You need to improve')
// }else{
//     document.write('Grade : Fail' + '<br/>')
//     document.write('Remarks : Sorry')
// }

//Guess game
// var num = prompt('Enter number')
// for(var i=num;i<=10;i++){
//     if(num = i){
//         alert('Bingo')
//         break
//     }else{
//         alert('Try again')
//         break
//     }
// }

//Check number divisible by 3
// var num = +prompt('Enter number')
// if(num/3){
//     alert('Number is divisible by 3')
// }else{
//     alert('Enter another number')
// }

//Check even or odd
// var num = +prompt('Enter number')
// if(num/2){
//     alert('Number even')
// }else if(num/3){
//     alert('Number is odd')
// }else{
//     alert('Enter another number')
// }

//Check Temperature
// var temp = prompt('Enter temperature')
// if(temp>40){
//     alert('It is too hot outside')
// }else if(temp>30){
//     alert('The weather today is normal')
// }else if(temp>20){
//     alert('The weather is cool')
// }else if(temp>10){
//     alert('Todays weather is too cool')
// }

//Calculator
var fnum = +prompt('Enter first number')
var snum = +prompt('Enter second number')
var operator = +prompt('Enter operator')
if(operator === '+'){
    alert(fnum + snum)
}else if(operator==='-'){
    alert(fnum - snum)
}else if(operator==='*'){
    alert(fnum*snum)
}else if(operator==='/'){
    alert(fnum/snum)
}else{
    alert('Enter correct operator')
}