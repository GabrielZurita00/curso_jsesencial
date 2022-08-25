"use strict"

//iterando con for...in

var platillos = ["ceviche", "tacos", "pasta"];

for (let i in platillos){
    console.log(platillos[i]);
}

//iterando con forEach

// platillos.forEach( platillo => console.log(platillo) )
platillos.forEach( (platillo, index) => console.log(index, platillo) )

//buscar en arreglo
//var pElegido = platillos.find( platillo => platillo == "pasta" );

var menu = [
    {nombre: 'Ceviche', precio: 20 , pais: 'Perú'},
    {nombre: 'Tacos', precio: 10 , pais: 'México'},
    {nombre: 'Pasta', precio: 50 , pais: 'Italia'},
    {nombre: 'Quesadillas', precio: 15 , pais: 'México'}
];

var pElegido = menu.find( platillo => platillo.nombre == 'Tacos');

console.log(pElegido);

//búsqueda de índice

var numPlatillo = platillos.findIndex(platillo => platillo == 'tacos');

var numMenu = menu.findIndex(platillo => platillo.nombre == 'Tacos');


//filtrar arreglos
//trae la primera incidencia
var res = menu.find(platillo => platillo.pais == 'México');
//trae todas las incidencias
var resultado = menu.filter(platillo => platillo.pais == 'México');

//validacion de elementos en un arreglo
//hay platillos debajo de 20? 
res = menu.some( platillo => platillo.precio < 20 );

//todos los platillos cuestan debajo de 60?
resultado = menu.every( platillo => platillo.precio <= 60 );