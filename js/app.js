const cambiarTitulo = () => {
    console.log ('estoy en la funcion cambiarTitulo')
}

//seleccionar el h1 
//const tituloPrincipal = document.getElementsByTagName('button');
//const tituloPrincipal = document.getElementsByClassName('btn');
//const tituloPrincipal= document.getElementsByClassName('btn')
//const tituloPrincipal = document.getElementById('titulo');
//console.log(tituloPrincipal);
const tituloPrincipal = document.querySelector('h1');
console.log(tituloPrincipal);
//para buscar por ID en css se coloca #
//const tituloPrincipal = document.querySelector('.btn');
//console.log(tituloPrincipal);


//modificar el texto h1
tituloPrincipal.innerHTML = 'Titulo desde <b> app.js </b>'

//agregamos clase a h1 
tituloPrincipal.className = 'display-1 text-info'