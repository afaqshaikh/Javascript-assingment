//Power function
// function power(){
//     var a = +prompt('Enter value to multiply')
//     var b = +prompt('Enter Power value')
//     console.log(Math.pow(a,b))
// }
// power()

//Leap year function
// function leapYear(){
//     var year = +prompt('Enter year to confirm leap year','Enter Year')
//     var checkYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 ===0)
//     console.log(checkYear)
//     }
// leapYear()

//Area of triangle
// function triangle(){
//     var a = +prompt('Enter length of triangle','First length')
//     var b = +prompt('Enter second length of triangle','Second length')
//     var c = +prompt('Enter  third length of triangle','Third length')
//     var S = (a+b+c)/2
//     function calcArea(){
//     var area = S*((S-a)*(S-b)*(S-c))
//     console.log(area)
//     }
//     return calcArea()
// }
// triangle()

//Percentage of a student
// function mainFunction(){
//     var a = +prompt('Enter marks in First subject less than or equal to fifrty')
//     var b = +prompt('Enter marks in second subject less than or equal to fifrty')
//     var c = +prompt('Enter marks in third subject less than or equal to fifrty')
//     function average(){
//         return (a+b+c)/150
//     }
//     function percentage(){
//         return average()*100
//     }
//     console.log(percentage())
// }
// mainFunction()

//Custom function for indexOf function
// function sample(){
//     var a = 'My name is Afaque'
//     var findIndex = a.charAt(1).length
//     console.log(findIndex)
// }
// sample()

//Delete vovel from a sentenc
// function vovel(){
//     var a = 'What are you doing'
//     var replaceVovel = a.replace(/[aeiou]/g,' ')
//     console.log(replaceVovel)
// }
// vovel()

//Function to count vovel
// function vovel(){
//     var a = 'Pleases read this application and give me gratuity';
//    var b =  'aeiouAEIOU';
//    var counter = 0
//     switch(a){
//        case 0 : b.indexOf(a)!==-1
//        console.log( 'The number of vovel is  ',counter+1 )
//        default: console.log('No vovels found')
//    }

// }
// vovel()

//Distance in meter,feet,inches,centimeter
// function distance(){
//     var a = +prompt('Enter distance in KM to convert')
//     function meter(){
//         console.log (a*1000,'Meter')
//     }
//     function feet(){
//         console.log(meter()*3.28084,'Feet')
//     }
//     function inches(){
//         console.log(feet()*12,'Inches')
//     }
//     function centimeter(){
//         console.log(inches()*2.54,'Centimeter')
//     }
//     return centimeter()
// }
// distance()

//Overtime salary
// function salary(){
//     var a = +prompt('Enter employ working hours')
//     var b = a - 40
//     if(a <= 40){
//         console.log('No overtime salary')
//     }else {
//         console.log(b*12)
//     }
// }
// salary()

//Currency denomination function
function currency() {
    var a = +prompt('Enter amount to withdraw')

    if (a >= 100) {
        var hundred = a / 100
        var floorHundred = Math.floor(hundred)
        var hundredRemainder = a - (floorHundred * 100)
        if (hundredRemainder >= 50) {
            var fifty = hundredRemainder / 50
            var floorfifty = Math.floor(fifty)
            var fiftyRemainder = hundredRemainder - (floorfifty * 50)

        } if (fiftyRemainder >= 10 || fiftyRemainder === 0) {
            var ten = fiftyRemainder / 10
            var floorTen = Math.floor(ten)
        }
        console.log('You will have' + ' ' + floorHundred + ' ' + 'Hundred notes' + ' ' + floorfifty + ' ' + 'fifty notes' + ' ' + floorTen + ' ' + 'Tens notes')
    }
}
currency()