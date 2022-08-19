"use strict"

//ventana de alerta

alert("MENSAJE \n\n Hola mundo");

//ventana de confirmación

const boton = document.querySelector('.boton');

boton.addEventListener("click", function(){
    let resultado = confirm("¿Deseas cambiar el color de la página?");
    console.log(resultado);
    if (resultado){
        let pagina = document.body;
        pagina.style.backgroundColor = pagina.style.backgroundColor == "blue" ? "white" : "blue";
    }else{
        window.location = "http://www.google.com";
    }
})

//ventana de ingreso de datos

var email = prompt("Escribe tu correo para más videos", "data@info.com")
