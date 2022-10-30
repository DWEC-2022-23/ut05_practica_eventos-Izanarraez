window.onmousemove = function r1(event){
    document.getElementById("Rtxt").innerHTML = '<p id="Rtxt">Se mueve el ratón</p>';
    document.getElementById("Rtxt").style.borderTop = "none";
    
    var xn = event.clientX;
    var yn = event.clientY;

    var xp = event.pageX;
    var yp = event.pageY;

    let resuNav = "Navegador["+xn+","+yn+"]";
    let resuPag = "Pagina["+xp+","+yp+"]";

    document.getElementById("Rn").innerHTML = resuNav;
    document.getElementById("Rp").innerHTML = resuPag;

    document.getElementById("inf").style.background = "white";
    document.getElementById("teclado").style.background = "white";
}

window.onclick = function r2(){
    document.getElementById("inf").style.background = "#FFFFCC";
    document.getElementById("Rtxt").innerHTML = '<p id="Rtxt">Se hace click en el ratón</p>';
    document.getElementById("Rtxt").style.borderTop = "none";
}

window.onkeydown = function r3(event){
    var evKey = event.key;
    var evCod = event.keyCode;

    let resuKey = "Carácter["+evKey+"]";
    let resuCod = "Código["+evCod+"]";

    document.getElementById("Rn").innerHTML = resuKey;
    document.getElementById("Rp").innerHTML = resuCod;

    document.getElementById("inf").style.background = "#CCE6FF";
    document.getElementById("Rtxt").innerHTML = '<p id="Rtxt">Se pulsa una tecla</p>';
    document.getElementById("Rtxt").style.borderTop = "none";
}
