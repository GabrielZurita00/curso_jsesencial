"use strict"

//timers

//setInterval

var temporizador = setinterval(function(){
    setColor()
}, 2000);

function setColor(){
    var pagina = document.body;
    pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor(){
    clearInterval(temporizador)
}

//setTimeout (ocurre una vez)

setTimeout(function(){
    setColor();
}, 3000);