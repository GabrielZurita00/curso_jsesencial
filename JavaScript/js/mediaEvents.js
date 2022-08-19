"use strict"

//Eventos multimedia

const video = document.querySelector('.bostonVideo');

video.addEventListener('play', function(){
    console.log('El video ha iniciado');
});

video.addEventListener('seeking', function(){
    console.log('Se está buscando el video', this.currentTime);
});

video.addEventListener('ended', function(){
    console.log('El video ha terminado');
});