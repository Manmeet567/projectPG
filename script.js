let modal = document.getElementById('modal1');
let modal2 = document.getElementById('modal2');
let canvas = document.getElementById('canvas');

// modal 1
function signin(){
    modal.style.display="block";
}
function closed(){
    modal.style.display="none";
}
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
    if(e.target == modal2){
        modal2.style.display = "none";
    }
    if(e.target == canvas){
        canvas.style.display = "none";
    }
}

// modal 2
function login(){
    modal2.style.display = "block";
}
function close2(){
    modal2.style.display = "none";
}

// canvas
function burger(){
    canvas.style.display = "flex";
}
function close3(){
    canvas.style.display = "none";
}