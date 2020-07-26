function results(){
    var email = document.getElementById('exampleInputEmail1').value
    var password = document.getElementById('exampleInputPassword1').value
    document.write('<h2>Your data :</h2>')
    document.write(`Email : ${email} <br/>`)
    document.write(`Password: ${password} <br/>`)

}

function read(){
    var dots = document.getElementById('dots')
    var more = document.getElementById('more')
    var btn = document.getElementById('btn')
    if(dots.style.display === 'none'){
        dots.style.display = "inline";
        more.style.display = "none";
        btn.innerHTML = "Read more"; 
    }else{
        dots.style.display = "none";
        more.style.display = "inline";
        btn.innerHTML = "Read Less"; 
    }
}

function studentData(){
    var name = document.getElementById('name').value
    var number = document.getElementById('number').value
    var tname = document.getElementById('tname')
    var tnumber = document.getElementById('tnumber')
   tname.innerHTML = name
    tnumber.innerHTML = number
    return 
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

