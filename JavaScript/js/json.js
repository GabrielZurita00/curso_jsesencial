"use strict"

//JSON => JavaScript Object Notation

var persona = {nombre: 'Sergio', twitter: 'yacafx'};

var personas = [
    {nombre: 'Hugo', twitter: 'dchugo'},
    {nombre: 'Paco', twitter: 'dcpaco'},
    {nombre: 'Luis', twitter: 'dcluis'},
    persona
];

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON);