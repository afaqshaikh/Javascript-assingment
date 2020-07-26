function mobile() {
    alert('Thanks for purchasing a phone from us')
}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

function image(pic) {
    pic.src = "card1.jpg"
}

function defaultImage(pic) {
    pic.src = "card.png"
}


var count = 0
var countHeading = document.getElementById('count')
var interval;
function timer() {
    count++;
    countHeading.innerHTML =  count;
    }

    function start() {
        if(!interval){
        interval = setInterval(timer, 10);
        }
    }
    
    function Pause() {
        clearInterval(interval);
        interval = false;
    }
    
 