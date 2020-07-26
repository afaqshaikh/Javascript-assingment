var div = document.getElementById('todoText')

function getText() {
    //Getting text and set it into p
    var txt = document.getElementById('inputText')
    var li = document.createElement('li')
    li.setAttribute('class', 'list-group-item list-group-item-white text-left shadow-sm mb-5 w-50 m-auto p-1')
    var text = document.createTextNode(txt.value)
    li.appendChild(text)
    div.appendChild(li)
    txt.value = '';



    //Setting delete button
    var del = document.createElement('button')
    var delText = document.createTextNode('Delete')
    del.appendChild(delText)
    li.appendChild(del)
    del.setAttribute('onclick', 'deleteText(this)')
    del.setAttribute('class', 'btn btn-danger float-right ml-2')

    //Setting Edit button
    var edit = document.createElement('button')
    var editText = document.createTextNode('Edit')
    edit.appendChild(editText)
    li.appendChild(edit)
    edit.setAttribute('onclick', 'editText(this)')
    edit.setAttribute('class', 'btn btn-primary float-right ')
}

//Delete Function
function deleteText(e) {
    e.parentNode.remove()
}

//Remove all function
function deleteAll(s) {
    div.innerHTML = ''
}

//Edit item function
function editText(e) {
    var newChild = prompt('Edit Text', e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = newChild
}
