var d = new Date()
document.write(d)

//Getting month
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
// alert("Current Month :  " + months[d.getMonth()] )

// //Alert first three letter of the day
// var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// alert('Today is : ' +days[ d.getDay()])

// //setting display message if it is saturday or sunday
// // var days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
// if(days[ d.getDay()] === 'Sun' || days[ d.getDay()] === 'Sat' ){
//     alert('Its a Fun day')
// }

// //Getting date
// var date = d.getDate()
// if(date < 16){
//     alert('First fifteen days of the month')
// }else{
//     alert('Last days of the month')
// }

//Getting the millisecond and minutes
var d = new Date(1970, 1 ,1)
var dmili = d.getTime()
var nd = new Date()
var ndmili = nd.getTime()
var diff = ndmili - dmili
var m = Math.floor(diff/(1000*60*60))
var ml = Math.floor(diff/(1000))
document.write('<br/>'+'Elasped minutes since Jan 1,1970 : ' + m + '<br/>')
document.write('Elasped millisecond since Jan 1,1970 : ' + ml + '<br/>')

//Setting Am or Pm
// var hour = d.getHours()
// if(hour<=12){
//     console.log('Its pm')
// }else{
//     console.log('Its am')
// }

//Setting Year
var d = new Date();
d.setFullYear(2020, 11, 3);
d.setHours(0)
d.setMinutes(0)
d.setSeconds(0)
document.getElementById("demo").innerHTML ='Later Date : ' + d;
// console.log(laterDate)

//Setting date since ramzan
var d = new Date(2015,5,18)
var dmili = d.getTime()
var nd = new Date()
var ndmili = nd.getTime()
var diff = ndmili - dmili
var accurate = Math.floor(diff/(1000*60*60*24))
document.write( '<br/>' +accurate + '  days have passed since 1st Ramdan 2015')

//Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015
var d = new Date(2020,5,1)
var dmili = d.getTime()
var nd = new Date()
var ndmili = nd.getTime()
var diff = ndmili - dmili
var accurate = Math.floor(diff/(1000*60))
document.write( '<br/>' +'On refernce date ' + nd + ' ' + accurate + ' seconds has passed ' + d + '<br/>')

//Create a Date object for the current date and time.Extract the hours
var d = new Date()
var hour = d.getHours() - 1
document.write( '<br/>' + 'Current Date : ' + d + '<br/>')
document.write('1 hour age, it was : ' + hour + ' ' + 'am')

//Write a program that creates a date object and show the date in an alert box that is reset to 100 years back
var d = new Date()
var year = d.getFullYear() - 100
document.write( '<br/>' + 'Current Date : ' + d + '<br/>')
document.write( '100 years back the year is : '+ year + '<br/>')

// Write a program to ask the user about his age. Calculate and show his birth year in your browser
// var day = +prompt('Enter your age')
// var d = new Date()
// var year = d.getFullYear() - day
// document.write( '<br/>' + 'Your age  : ' + day + '<br/>')
// document.write('Your birth year is : ' + year + '<br/>' )

//Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places
var name = prompt('K-Electric bill','Enter costumer name')
var d = new Date()
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = months[d.getMonth()]
var unit = prompt('K-Electric bill','Enter costumer unit')
var chargesUnit = 16
var amount = unit * chargesUnit
var late = 350
var gross = amount + late
document.write('<h1>K-Electric bill</h1>')
document.write( '<br/>' + 'Costumer Name  : ' + name + '<br/>')
document.write(  'Month  : ' + month + '<br/>')
document.write(  'Number oof unit  : ' + unit + '<br/>')
document.write(  'Charges per unit  : ' + chargesUnit + '<br/>')
document.write( '<br/>' + 'Net payable amount(within due date)  : ' + amount + '<br/>')
document.write(  'Late payment surcharge  : ' + late + '<br/>')
document.write(  'Gross amount payable(after due date)  : ' + gross + '<br/>')
