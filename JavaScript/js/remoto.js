"use strict"

//Obteniendo datos con fetch


var boton = document.getElementById('boton');
var contenedor = document.getElementById('contenedor');
/** 
var posts = null;

boton.addEventListener('click', function(){

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(data => data.json())
    .then(data => {
        posts = data;
        mostrarDatos(posts);
    })

})


**/
//Trabajando con promesas

var contBanderas = document.getElementById('banderas');

var mensajes = document.getElementById('mensajes');

boton.addEventListener('click', function(){
    getPosts()
    .then(data=>data.json())
    .then(posts =>{
        mostrarDatos(posts);
        return getCountries();
    })
    .then(data=>data.json())
    .then(countries=>{
        mostrarBanderas(countries);
    })
    .catch(error => {
        mensajes.classList.toggle('hide');
        mensajes.innerHTML=error;
        setTimeout(() => mensajes.classList.toggle('hide'),3000)
    })
});

function getPosts(){
    return fetch('https://jsonplaceholder.typicode.comm/posts');
}

function getCountries(){
    return fetch('https://restcountries.com/v2/all');
}

function mostrarBanderas(countries){
    contBanderas.innerHTML = '';
    countries.map((country,i) =>{
        let bandera = document.createElement('img');
        bandera.src = country.flag;
        bandera.width = '20';
        bandera.height = '20';
        contBanderas.appendChild(bandera);
    })
}

function mostrarDatos(posts){
    posts.map((post, i) => {
        let titulo = document.createElement ('h1');
        let contenido = document.createElement('p');    

        titulo.innerHTML = (i + 1) + " - " +  post.title;
        contenido.innerHTML = post.body;

        contenedor.appendChild(titulo);
        contenedor.appendChild(contenido);
    })
}