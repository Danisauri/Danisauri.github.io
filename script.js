
let textoJuego = document.getElementById("textoJuego");
let textoUsuarioHTML = document.getElementById("textoUsuario");
let botonInicioHTML = document.getElementById("botonInicio")
let botonPausaHTML = document.getElementById("botonPausa")
let botonReiniciarHTML = document.getElementById("botonReiniciar")
let timeBarHTML = document.getElementById("timeBar");
let aciertosHTML = document.getElementById("aciertos");
let erroresHTML = document.getElementById("errores");

botonInicioHTML.addEventListener("click", inicio);
botonPausaHTML.addEventListener("click", pausa);
botonReiniciarHTML.addEventListener("click", reiniciar);
textoUsuarioHTML.addEventListener("keypress", enter);

function inicio() {
    let words = ["Dani","Carlos","Horacio","Punti"];
    let randomText = words[Math.floor(Math.random()*words.length)];
    textoJuego.innerHTML = randomText;
    cancelTicket = setInterval(intervalo,0.1);
    textoUsuarioHTML.focus();
}

let cancelTicket;
let progress=1
let x=1

function intervalo() {
    if (progress<=0){
        progress=1
        x=x+0.1
        clearTimeout(cancelTicket);
        inicio();
    }
    timeBarHTML.style.width = Math.floor(progress*100) + "%";;
    progress=progress-0.001*x;  
}

function pausa (){
    clearTimeout(cancelTicket);
}

function reiniciar (){
    clearTimeout(cancelTicket);
    x=1;
    progress=1;
    inicio();
    aciertosHTML.innerHTML = 0;
    erroresHTML.innerHTML = 0;
}

function enter (e){
    const code = (e.keyCode ? e.keyCode : e.which);
    if (code !== 13) {
        return;
    }       
    if (textoUsuarioHTML.value.trim() === textoJuego.value) {
        aciertos();
    }
    else{
        errores();
    }
    progress=1;
    x=x+0.1;
    clearTimeout(cancelTicket);
    timeBarHTML.style.width = Math.floor(progress*100) + "%";;
    progress=progress-0.001*x;
    textoUsuarioHTML.value = '';
    inicio();
}

let eventosPositivos = 1;

function aciertos (){
    aciertosHTML.innerHTML = eventosPositivos++;
}

let eventosNegativos = 1;

function errores (){
    erroresHTML.innerHTML = eventosNegativos++;
}