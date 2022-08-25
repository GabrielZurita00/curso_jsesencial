//Entendiendo el DOM y el BOM

var boton = document.getElementById("boton");

boton.addEventListener('click', function(){
    console.log(window.location.href);

    window.location.href = 'http://github.com/yacafx';
})


