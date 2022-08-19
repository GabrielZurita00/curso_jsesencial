"use strict"

var edad = 35;

var cantidad = "100";

var nuevaCantidad = Number(cantidad);

//Propiedades numéricas
console.log("MAX_VALUE: ", Number.MAX_VALUE);

console.log("MIN_VALUE: ", Number.MIN_VALUE);

console.log("NEGATIVE_INFINITY: ", Number.NEGATIVE_INFINITY);

console.log("INFINITY: ", Number.POSITIVE_INFINITY);

console.log("NaN: ", Number.NaN);


//Métodos numéricos

var numero = "10.30";

console.log('Number: ', typeof numero, typeof Number(numero));
console.log('parseInt: ', parseInt(numero));
console.log('parseFloat: ', parseFloat(numero));
console.log('isNaN: ', isNaN(numero));
console.log('isInteger: ', Number.isInteger(numero));

//Propiedades numéricas de instancias

var num = 2.5;

console.log("toExponential: ", num.toExponential(4));
console.log("toFixed: ", num.toFixed(2));
console.log("toPrecision: ", num.toPrecision(6));
console.log("toString: ", typeof num.toString());