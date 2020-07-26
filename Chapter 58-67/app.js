var d = document.getElementById('main-content')
console.log(d.childNodes)

//Showing inner HTML by class name
var content = document.getElementsByClassName('render')
document.write(content[0].innerHTML)
document.write(content[1].innerHTML)
document.write(content[2].innerHTML)
document.write(content[3].innerHTML)
document.write(content[4].innerHTML)

// Fill input value whose element id first-name using javascript
var c = document.getElementById('first-name')
var setC = c.setAttribute('placeholder','Afaque')
 console.log( c.nodeValue = 'Afaque')

// Set value for lastname
var w = document.getElementById('last-name')
var setW = w.setAttribute('placeholder','Shaikh')
 console.log( w.nodeValue = 'Shaikh')

// Set value for Email
 var w = document.getElementById('email')
var setW = w.setAttribute('placeholder','afaquesami4@gmail.com')
 console.log( w.nodeValue = 'afaquesami4@gmail.com')

 //Finding node type
 var findType = document.getElementById('form-content')
 console.log(findType.nodeType)

 //Show node type of element having id “lastName” and its child node.
var d = document.getElementById('main-content')
console.log(d.childNodes[3].nodeType)

//Update child node of element having id “lastName”.
var d = document.getElementById('main-content')
var setD = d.setAttribute('id','lastname')
console.log(setD)

//Get First and last child of id “main-content”.
// var d = document.getElementById('main-content')
// console.log(d.firstChild)
// console.log(d.lastChild)

//Get next and previous siblings of id “lastName”.
var w = document.getElementById('last-name')
console.log(w.nextSibling)
console.log(w.previousSibling)

//Get parent node and node type of element having id “email”
var w = document.getElementById('email')
console.log(w.parentNode)
console.log(w.nodeType)


