//Display Date and time
function time() {
    var d = new Date();
    return d;
}
console.log(time());

//Greeting function
// function greeting(){
//     var fname = prompt("Enter your first name","First name")
//     var lname = prompt("Enter your last name","Last name")
//     var greet = "Greeting" + ' ' + fname + lname;
//     return greet;
// }
// console.log(greeting())

//Addition of two number
// function addition(){
//     var fnum = +prompt("Enter first number","First number")
//     var lnum = +prompt("Enter second number","Last number")
//     var total = fnum + lnum;
//     return total;
// }
// console.log(addition())

//Calculator
// function calculator(){
//     var num1 = +prompt("Enter first number","First number")
//     var num2 = +prompt("Enter second number","second number")
//     var operator = prompt("Enter operator","operator")
//     if( operator === '+'){
//         return num1 + num2
//     }else if(operator === '-'){
//         return num1 - num2
//     }else if (operator === '*'){
//         return num1 * num2
//     }else if(operator === '/'){
//         return num1 / num2
//     }else{
//         return alert('Enter correct operator')
//     }
// }
// console.log(calculator())

//Squares its argument
// function squares(){
//      var num = +prompt("Enter number you want to square","Enter number")
//     return num * num
// }
// console.log(squares());

//Factorial its argument
// function factorial() {
//     var num = prompt("Enter number you want to factorial", "Enter number")
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     else{
//     for (var i = num - 1; i >= 1; i--) {
//         num *= i
//     }
// }
//     return num;
// }
// console.log(factorial());

//Counting function
// function counter(){
//    var num1 = prompt("Enter first number", "Enter number")
//    var num2 = prompt("Enter last number", "Enter number")
//    var num3 = ''
//     for(var i = num1 ; i < num2.length ; i++){
//            num3 = i
//     }
//     return num3;

// }
// console.log(counter());

//To calculate Hypotenuse
// function calculateHypotenuse(){
//     var base = +prompt("Enter Base", "Enter base")
//     var perpendicular = +prompt("Enter Perpendicular", "Enter perpendicular")
//     function calculateSquare(){
//         var baseSquare = base * base
//         var perpendicularSquare = perpendicular * perpendicular
//         var hypotenuseSquare = (baseSquare + perpendicularSquare) * (baseSquare + perpendicularSquare)
//         return hypotenuseSquare;
//     }
//     var hypotenuse = calculateSquare()
//     return hypotenuse;
// }
// console.log(calculateHypotenuse())

// Calculate area of rectangle
// function calculateArea(){
//     var width = +prompt("Enter width", "Enter width")
//     var height = +prompt("Enter height", "Enter height")
//     var area = width * height
//     return area
// }
// console.log(calculateArea());

// Check palindrome
// function checkpalindrome(){
//     var name = prompt("Enter value to chrck palindrome ", "Enter palindrome")
//     name.toLowerCase()
//     var len = name.length;
//     for (var i = 0; i < len/2; i++) {
//       if (name[i] !== name[len - 1 - i]) {
//           console.log('Value is not palindrome')
//       }
//     }
//     console.log('Value is palindrome')
//    }
// checkpalindrome()

//First letter of each word of a string to uppercase
// function letter(){
//     var sentence = prompt('Enter String','Enter String')
//     return sentence.replace(/\w\S*/g,(txt) => {
//    return      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
   
//     })
// }
// console.log(letter())

// //To find the longest word
// function findLongestWord() {
//     var str  = prompt('Enter string')
//     var longestWord = str.split(' ').reduce(function(longest, currentWord) {
//       return currentWord.length > longest.length ? currentWord : longest;
//     }, "");
//     return longestWord
//   }
//   console.log(findLongestWord())

//Functikn that return occurence of two sentence
// function occurrences(){
//     var txt = prompt('Enter string')
//     var letter = prompt('Enter letter')
//     var count = txt.split(letter).length-1
//     console.log(count)
// } 
// occurrences()

//To calculate circumference of circle
// function calcCircumference(){
//     var radius = +prompt('Enter radius of a circle')
//     var value = 2*(Math.PI*radius)
//     console.log('The circumference of a circle is ' + value)
// }
// calcCircumference()

//To calculate area of a circle
// function calcArea(){
//     var radius = +prompt('Enter radius of a circle')
//     var value = Math.PI*(radius*radius)
//     console.log('The area of a circle is ' + value)
// }
// calcArea()
