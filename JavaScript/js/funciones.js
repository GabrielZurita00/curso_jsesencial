"use strict"

// Estructura básica de una función o método

function saludar(){
    var saludo = "Hola mundo";
    //console.log(saludo);
    return saludo;
}


//Parametros de una función

function saludando(nombre, edad){
    console.log("Hola: ", nombre);
    console.log('Edad: ', edad);
    var resultado = nombre + " tiene " + edad + " años";
    return resultado;
}

var mensaje = saludando("yacaf", 34);

//Inicialización de parámetros

function contar (cantidad=20){
    console.log('Total: ', cantidad);
}
contar();
contar(100);

//Parámetros REST
function cocinar (...masIngredietes){
    console.log("masIngredientes", masIngredietes);
}

cocinar("Pollo","Tomate","Arroz","Frijoles","Pescado","Chile");

//Parámetros SPREAD
function cocinar(ingrediente1, ingrediente2, ingrediente3, ...otros){
    console.log('Ingrediente 1: ', ingrediente1);
    console.log('Ingrediente 2: ', ingrediente2);
    console.log('Ingrediente 3: ', ingrediente3);
    console.log('Otros: ', otros);
}

var ingredientesBase = ["Pollo", "Tomate"];

cocinar(...ingredientesBase, "Arroz", "Pescado", "Chile");

//Función anónima
/* //sin use strict
(
    function(){
        var mensaje = "Hola de nuevo";
        console.log(mensaje);
    }
)()*/

var saludar = function(nombre){
    var mensaje = "Hola " + nombre;
    return mensaje;
}

//Callbacks

function calcular(datoA, datoB, sumarCB, restarCB){
    var suma = datoA + datoB;
    var restar = datoA - datoB;

    sumarCB(suma);
    restarCb(restar);
}

calcular(2,3,function(resultado){
    console.log('Suma', resultado);
},function(resultado){
    console.log('Resta', resultado);
})

//Funciones arrow | fat arrow | Lambda

var saludation = nombre => "Hola " + nombre;

console.log(saludation("Susana"));

var sumar = cantidad=>cantidad+10
console.log(sumar(10));

var calcular = (datoA, datoB) => datoA+datoB
console.log(calcular(10,15));

var generar = (datoA, datoB) => {
    var datoC = 5;
    return datoA+datoB+datoC;
}
console.log(generar(10,5));

var validar = () => {
    return 'Validación correcta'
}
console.log(validar());