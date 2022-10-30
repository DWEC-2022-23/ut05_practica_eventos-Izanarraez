document.getElementById("numero").ondblclick = function multiplicar(){
    let numero = document.getElementById("numero").innerHTML;
    let triple = Math.pow(numero,3);
    alert(triple);
}

document.getElementById("numero").onmouseover = function multiplicar(){

    if(document.getElementById("numero").onmouseover){
        document.getElementById("numero").style.color = "red";
        document.getElementById("numero").style.background = "black";
    }
}

document.getElementById("numero").onmouseout = function multiplicar(){

    if(document.getElementById("numero").onmouseout){
        document.getElementById("numero").style.color = "black";
        document.getElementById("numero").style.background = "white";
    }
}