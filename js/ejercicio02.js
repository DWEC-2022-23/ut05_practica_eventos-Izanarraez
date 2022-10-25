function ocultar(){
    document.getElementById("contenidos_1").style.display = "none";
}
function recordar(){
    document.getElementById("contenidos_1").style.display = "flex";
}

document.getElementById("enlace_1").onclick = function muestraOculta() {
    let conte = document.getElementById("contenido_1");
    if(conte.style.display == "none"){
        document.getElementById("enlace_1").href = "javascript:recordar();";
    }
    else{
        document.getElementById("enlace_1").href = "javascript:ocultar();";
    }
}

document.getElementById("enlace_1").onclick = function cl(){
    
    if(document.getElementById("enlace_1").onclick){
        document.getElementById("enlace_1").href = "javascript:muestraOculta();";
        if(document.getElementById("enlace_1").ondblclick){
            document.getElementById("enlace_1").href = "javascript:muestraRecordar();";
        }
    }
}

/*document.querySelector("#enlace_1").addEventListener("click", () => {
        let cont = 0;
    
        if(cont == 0){
            document.querySelector("#contenido_1").style.display = "none";
            cont++;
        }
        if(cont == 1){
            document.getElementById("contenido_1").style.display = "flex";
            cont--;
        }
});*/