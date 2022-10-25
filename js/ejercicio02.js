function ocultar_contenido1(){
    document.getElementById("contenidos_1").style.display = "none";
}
function recordar_contenido1(){
    document.getElementById("contenidos_1").style.display = "flex";
}

function ocultar_contenido2(){
    document.getElementById("contenidos_2").style.display = "none";
}
function recordar_contenido2(){
    document.getElementById("contenidos_2").style.display = "flex";
}

function ocultar_contenido3(){
    document.getElementById("contenidos_3").style.display = "none";
}
function recordar_contenido3(){
    document.getElementById("contenidos_3").style.display = "flex";
}

document.getElementById("enlace_1").onclick = function muestraOculta1() {
    let conte = document.getElementById("contenidos_1");
    if(conte.style.display == "none"){
        document.getElementById("enlace_1").href = "javascript:recordar_contenido1()";
    }
    else{
        document.getElementById("enlace_1").href = "javascript:ocultar_contenido1()";
    }
}

document.getElementById("enlace_2").onclick = function muestraOculta2() {
    let conte = document.getElementById("contenidos_2");
    if(conte.style.display == "none"){
        document.getElementById("enlace_2").href = "javascript:recordar_contenido2()";
    }
    else{
        document.getElementById("enlace_2").href = "javascript:ocultar_contenido2()";
    }
}

document.getElementById("enlace_3").onclick = function muestraOculta3() {
    let conte = document.getElementById("contenidos_3");
    if(conte.style.display == "none"){
        document.getElementById("enlace_3").href = "javascript:recordar_contenido3()";
    }
    else{
        document.getElementById("enlace_3").href = "javascript:ocultar_contenido3()";
    }
}