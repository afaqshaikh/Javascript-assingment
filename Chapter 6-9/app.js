//Write a program to take a number in a variable
// var a = +prompt('Enter number')
// document.write('The value of a is : ' + a + '<br/>')
// document.write('The value of ++a is : 11'  + '<br/>')
// document.write('Now value of a is : ' + ++a + '<br/>')
// document.write('The value of a++ is : 11' + '<br/>')
// document.write('Now value of a is : ' + a++ + '<br/>')
// document.write('The value of --a is : 11'  + '<br/>')
// document.write('Now value of a is : ' + --a + '<br/>')
// document.write('The value of a-- is : 11'  + '<br/>')
// document.write('Now value of a is : ' + a-- + '<br/>')

//What will be the output in variables a, b & result 
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.write('a is : ' + a)
// document.write('b is : ' + b)
// document.write('Result is : ' + result)

//Greet user
// var a = prompt('Enter name')
// document.write('Greet ' + a)

//Table
// var a = prompt('Enter nnmber')
// for(i=a;i<=10;i++){
//     document.write(a + ' x ' + i + ' = ' + a*i)
// }

//Marksheet
var d = prompt('Enter first subject name')
var a = +prompt('Enter marks in first subject')

var e = prompt('Enter second subject name')
var b = +prompt('Enter marks in second subject')

var f = prompt('Enter third subject name')
var c = +prompt('Enter marks in third subject')

var total = 100
document.write(d+' ' + total + ' ' + a + ' ' + Math.floor((a/total)*100) + '<br/>')
document.write(e+' ' + total + ' ' + b + ' ' + Math.floor((b/total)*100) + '<br/>')
document.write(f+' ' + total + ' ' + c + ' ' + Math.floor((c/total)*100) + '<br/>')
