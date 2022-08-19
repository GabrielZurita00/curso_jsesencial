"use strict"

//uso del operador this

const boton = document.querySelector('.boton');
/*
boton.addEventListener('click', function(){
    console.log('Botón pulsado');
    console.log(this);
    console.log(this.innerHTML);
}) */

boton.addEventListener('click', () => {
    console.log(this);
    this.location = "http://www.google.com";
})

