"use strict"

//Creando areglos

var platillos = [ "ceviche", "tacos", "pasta" ];

var bebidas = new Array("Jamaica", "Chicha","Pozol");

console.log(Array.isArray(platillos));

//Medir y acceder al arreglo

console.log("Hay "+ platillos.length +" platillos en el menú");

var primerPlatillo = platillos[0];
var ultimoPlatillo = platillos[platillos.length-1];

//Arreglos multidimensionales | arreglo de arreglos

var paises = ["Perú", "México", "Italia"];

var menu = [platillos, paises];

console.log(menu[0][0]);

//Operaciones básicas de un arreglo

console.log('Antes: ', platillos);

//añadir al arreglo
platillos.push("Tostadas");
//eliminar el último dato del arreglo
platillos.pop();
platillos.pop();

console.log('Después ', platillos);

//unir en String
var mensaje = platillos.join();

console.log(mensaje);

//Generación de arreglos

//split()
mensaje = "ceviche, tacos, pasta";

platillos = mensaje.split(', ');

//Array.from()
var platillosHTML = Array.from(document.querySelectorAll('platillos.p'));

var platillosH = platillosHTML.map( platillo => platillo.textContent );

//Aray.of()
var platillos2 = Array.of("ceviche", "tacos", "pasta");

console.log(platillosH);
console.log(platillos2);

//Ordenar arreglo

platillos = ["Ceviche", "Tacos", "Pasta"];

//Ordena de menor a mayor u orden alfabético
platillos.sort();

//invierte el arreglo
platillos.reverse();

//Desestructuración de arreglos

var platillos = ["ceviche", "tacos","pasta"];

//var platillo1 = platillos[0];
//var platillo2 = platillos[1];
//var platillo3 = platillos[2];

// var platillo1 = null;
// var platillo2 = null;
// var platillo3 = null;

var [platillo1, platillo2, platillo3] = platillos