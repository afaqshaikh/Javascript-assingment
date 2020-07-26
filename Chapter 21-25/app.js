//Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName.
// var fname = prompt('Enter your first name')
// var lname = prompt('Enter your first name')
// var fullName = fname.toUpperCase() + ' ' + lname.toUpperCase()
// document.write('First name : ' +fullName)

//Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// var a = prompt('Enter your favourite phone')
// var b = a.length
// document.write('Your favourite phone : ' + a + '<br/>')
// document.write('Length of string : ' + b)

//Write a program to find the index of letter “n” in the word “Pakistani” and display 
// var a = "Pakistani"
// var b = a.indexOf('n')
// document.write("String : " + a + "<br/>")
// document.write("Index of n is : " + b)

//Write a program to find the last index of letter “l” in the word “Hello World” and display 
// var a = "Hello World"
// var b = a.lastIndexOf('l')
// document.write("String : " + a + "<br/>")
// document.write("Last Index of l is : " + b)

//Write a program to find the character at 3rd index in the word “Pakistani” and display
// var a = "Pakistani"
// var b = a.charAt(3)
// document.write("String : " + a + "<br/>")
// document.write("Char at index 3 is : " + b)

//. Repeat Q1 using string concat() method.
// var fname = prompt('Enter your first name')
// var lname = prompt('Enter your first name')
// var con = fname.concat(lname)
// document.write(con)

//Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display
// var a = 'Hyderabad'
// var b = a.replace('Hyder','Islam')
// document.write(b)

//Write a program to replace all occurrences of “and” in the string with “&” and display
// var message = 'Ali and Sami are best friends. They play cricket and football together'
// var b = message.replace(/and/g,'&')
// document.write(b)

//Write a program that converts a string “472” to a number 472.
// var a = 472
// var b = a.toString()
// console.log(typeof(b))
// document.write('Value : ' ,a + "<br/>" )
// document.write('Type : ' ,typeof(a) + "<br/>" )
// document.write('Value : ' ,b + "<br/>")
// document.write('Type : ' ,typeof(b) + "<br/>")

//Write a program that takes user input. Convert and show the input in capital letters
// var a = prompt('Enter words')
// var b = a.toUpperCase()
// document.write('User Input : ' + a + '<br/>')
// document.write('Upper Case : ' + b)

//Write a program that takes user input. Convert and show the input in title case
// var a = prompt('Enter words')
// var b = a.replace(a[0],a[0].toUpperCase())
// document.write('User Input : ' + a + '<br/>')
// document.write('Title Case : ' + b)

//Write a program that converts the variable num to string
// var num  = 35.36
// var b = num.toString()
// document.write('Number : ' + num + '<br/>')
// document.write('Result : ' + b + '<br/>')

//Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !],
// var a = prompt('Enter Username')
// var code = a.charCodeAt()
// console.log(code)
// if(code === 33 ||code === 44||code === 46||code === 64){
//     alert('Enter valid username')
// }

//Write a program to enable “search by user input” in an array
// var b = prompt('Welcome to ABC baker,what do you want to order')
// var a = ['cake', 'applepie', 'cookie', 'chips', 'patties']
// for(i=0;i<a.length;i++){
//     if(  b === a[i] ){
//         alert(b + ' is available in our bakery')
//         break
//     }else{
//         alert('We are sorry, ' +b + ' is not available in our bakery')
//         break
//     }
// }

//Write a program to convert the following string to an array using string split method.
// var str = "University of Karachi";
// var arr = str.split("");
// var text = "";
// for (i = 0; i < arr.length; i++) {
//     text += arr[i] + "<br>"
//   }
// document.write(text)

//Write a program to display the last character of a user input.
// var a =prompt('Enter value')
// var b = a.slice(-1)
// document.write('User input : ' + a + '<br/>') 
// document.write('Last Index : ' + b)

//Write a program to count number of occurrences of word “the” in given string
var a = 'the quick brown fox jumps over the lazy dog'
document.write(a + '<br/>')
document.write('There are ' + a.match(/the/g).length  + ' occurence of the word "the"' )