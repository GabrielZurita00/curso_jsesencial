"use strict"

var datoA = 100;
var datoB = 20;
var datoC = 5;
var resultado = "";

//Condición IF
if (datoA > datoB){
    resultado = "La condición se cumplió";
}

//Condición IF-ELSE
if (datoB < datoA){
    resultado = "Se cumplio otra condición";
} else {
    resultado = "No se cumplió esta condición"
}

//Condición IF-ELSE-IF
if (datoA > datoB){
    resultado = "La condición se cumplió";
} else if (datoB == datoA){
    resultado = "Segunda evaluación verdadera";
} else {
    resultado = "No se cumplió ninguna evaluación";
}

//Condiciones anidadas
if (datoA > datoB){
    resultado = "La condición se cumplió";
    if (datoA < datoC){
        resultado = "Evaluación anidada verdadera";
    } else {
        resultado = "No se cumplió la evaluación anidada";
    }
} else {
    resultado = "No se cumplió la evaluación";
}

//Estructura SWITCH
var edad = 30;
var mensaje = "";
//Evaluación numérica

switch (edad) {
    case 10:
            mensaje = "La edad es 10 años";
        break;
    
    case 20:
            mensaje = "La edad es 20 años";
        break;

    case 30:
            mensaje = "La edad es 30 años";
        break;

    default:
            mensaje = "ningún caso coincide";
        break;
}

//Evaluación texual
var producto = "Tableta"

switch (producto) {
    case "TV":
        mensaje = "Se eligió la TV"
    break;

    case "Radio":
        mensaje = "Se eligió la radio"
    break;

    case "Teléfono":
        mensaje = "Se eligió el teléfono"
    break;

    default:
        mensaje = "No se eligió ningún producto"
    break;
}