"use strict"


var datoA = 10;
var datoB = 20;


//*** Operadores aritméticos

//SUMA +
var suma = datoA + datoB;

//RESTA -
var resta = datoA - datoB;

//MULTIPLICACIÓN *
var multiplicacion = datoA * datoB;

//DIVISIÓN /
var division = datoA / datoB;

//MODULO O RESIDUO %
var modulo = datoA % datoB;

//INCREMENTO ++
var incremento = datoA;
incremento++;

//DECREMENTO
var decremento = datoB;
decremento--;


//*** Operadores relacionales

//MAYOR QUE >
var mayorQue = datoA > datoB;

//MENOR QUE <
var menorQue = datoA < datoB;

//MAYOR O IGUAL QUE >=
var mayorIgual = datoA >= datoB;

//MENOR O IGUAL QUE <=
var menorIgual = datoA <= datoB;

//IGUAL QUE ==
var igualQue = datoA == datoB;

//NO ES IGUAL O ES DIFERENTE QUE !=
var diferente = datoA != datoB;


//*** Operadores lógicos

//OPERADOR Y AND &&
var and = (datoA > 10 && datoB > 10);

//OPERADOR O OR ||
var or = (datoA > 10 || datoB > 10);

//OPERADOR NEGACIÓN NOT !
var not = !(datoA > 10);


//*** Operadores de asignación

//ASIGNACIÓN SIMPLE =
var igual = datoA;

//SUMAR Y ASIGNAR +=
var masIgual = 10;
masIgual += datoA;

//RESTAR Y ASIGNAR -=
var menosIgual = 10;
menosIgual -= datoA;

//MULTIPLICAR Y ASIGNAR *=
var porIgual = 10;
porIgual *= datoA;

//DIVIDIR Y ASIGNAR /=
var entreIgual = 10;
entreIgual /= datoA;

//*** Operador negativo

datoC = -datoA;

//*** Operador de concatenación
var nombre = "Sergio";
var apellido = "Brirto";

//CONCATENACIÓN DE NÚMEROS
var concatNum = datoA + datoB;

//CONCATENACIÓN DE CADENAS
var concatTexto = nombre + "" + apellido;

//CONCATENACIÓN DE NÚMEROS COMO TEXTO
var concatNumText = "2" + "8";

//CONCATENACIÓN DE TEXTO Y NÚMERO
var concatTxtNum = datoA + "8";


//*** Operador ternario o condicional 

//CONDICIÓN ? TRUE : FALSE
var resultado = datoA > datoB ? "si es mayor" : "No es mayor";


//*** Operador de tipo de datos
var activo = true;

var persona = {
    edad: 34,
    deporte: 'Correr'
};

console.log(typeof datoA);
console.log(typeof nombre);
console.log(typeof activo);

console.log(typeof persona);
console.log(typeof persona.edad);
console.log(typeof persona.deporte);