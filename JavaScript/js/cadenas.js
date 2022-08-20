"use strict"

//Creando cadenas de texto

var pais = 'México';

var comida = new String("Ceviche");

//medir cadena

var mensaje = "A"

console.log("La cadena de texto tiene: "+ mensaje.length + " letras");

//*** Métodos de búsqueda

var mensaje = "Estoy aprendiendo JS y Aprendiendo mucho";

var resultado;

//indexOf
resultado = mensaje.indexOf("aprendiendo");

//lastIndexOf
resultado = mensaje.lastIndexOf("aprendiendo");

//search
resultado = mensaje.search("aprendiendo");

//search | expresión regular
resultado = mensaje.search(/js/i);

//match
resultado = mensaje.match(/aprendiendo/gi);

//substr (desde la posición del primer parámetro)
resultado = mensaje.substr(6,11);

//substring (desde el inicio de toda la cadena)
resultado = mensaje.substring(6,17);

//charAt
resultado = mensaje.charAt(3);

//startsWith
resultado = mensaje.startsWith("Es");
var textoEn = mensaje.indexOf("JS");
resultado = mensaje.startsWith("J", textoEn);

//endsWith
resultado = mensaje.endsWith("cho");

//includes
resultado = mensaje.includes("JS", 6);

//***Métodos de generación, reemplazo y separación de texto

//repeat
resultado = mensaje.repeat(200);

//replace
resultado = mensaje.replace("JS", "a programar");

//slice
resultado = mensaje.slice(6);
resultado = mensaje.slice(6, mensaje.length-5)

//split
resultado = mensaje.split();
resultado = mensaje.split(" ");

//trim (quita espacios en blanco al principio y final del texto)
resultado = mensaje.trim();

//*** Métodos de transformación

var mensaje2 = "y programación"
var total = 123456;

resultado = total.toString();
resultado = mensaje.toLowerCase();
resultado = mensaje.toUpperCase();

resultado = mensaje.concat(mensaje2, 'y tengo muchas ideas', '123');

//Plantillas y literales

var lenguaje = 'JavaScript';
var lenguaje2 = 'HTML';

var mensaje = `Me gusta ${lenguaje} y su integración con ${lenguaje2}`;


var mensajeMultilinea = `
    Hola mundo,
    estoy aprendiendo
    ${lenguaje} y me gusta
`;