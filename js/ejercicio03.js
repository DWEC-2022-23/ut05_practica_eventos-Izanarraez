window.onmousemove = function r1(event){
    var xn = event.clientX;
    var yn = event.clientY;

    var xp = event.pageX;
    var yp = event.pageY;

    let resuNav = "Navegador["+xn+","+yn+"]";
    let resuPag = "Navegador["+xp+","+yp+"]";

    document.getElementById("mrn").innerHTML = resuNav;
    document.getElementById("mrp").innerHTML = resuPag;

    document.getElementById("crn").innerHTML = resuNav;
    document.getElementById("crp").innerHTML = resuPag;

    document.getElementById("cRaton").style.background = "white";
    document.getElementById("teclado").style.background = "white";
}

window.onclick = function r2(){
    document.getElementById("cRaton").style.background = "#FFFFCC";
}

window.onkeydown = function r2(event){
    var evKey = event.key;
    var evCod = event.keyCode;

    let resuKey = "Carácter["+evKey+"]";
    let resuCod = "Código["+evCod+"]";

    document.getElementById("tca").innerHTML = resuKey;
    document.getElementById("tco").innerHTML = resuCod;

    document.getElementById("teclado").style.background = "#CCE6FF";
}