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


// me creo una funcion 
const verMas = () => {
    console.log('desde la funcion ver mas')
}
//crear un parrafo opcion 1 
const parrafoNuevo = document.createElement('p'); 
console.log(parrafoNuevo)// <p> esta vacio</p>


// agregar el texto y clases 2
parrafoNuevo.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, alias suscipit deserunt magnam ex inventore! Rem dolorum adipisci laboriosam? Veritatis quod laborum, repudiandae explicabo soluta possimus amet beatae? Amet, quaerat.` ;

parrafoNuevo.className = 'lead'

//agregar el nuevo parrafo al DOM 3 A TRAVES DE UNA vARIABLE
const seccionInformacionExtra = document.getElementsByClassName('my-5');
console.log(seccionInformacionExtra[1]);
//seccionInformacionExtra[1].appendChild(parrafoNuevo)
//seccionInfotmacionExtra[1].appendChild(parrafoNuevo) // agregamos parrafo nuevo
// seccionInformacion [1].prepend(parrafoNuevo)//agregamos parrafo al principio
seccionInformacionExtra[1].insertBefore(parrafoNuevo,btnVerMas)
console.log(seccionInformacionExtra[1].children)
    
 // agrega un nodo al hijo al principio
//console.log(seccionInformacionExtra[1].children) 

//modificar el texto del boton 
btnVerMas.innerHTML ='Ocultar';
btnVerMas.className = 'btn btn-outline-danger';

//buscar el boton ver mas 
const btnVerMas = document.getElementById('btnVerMas');

//agregar un evento click 
btnVerMas.addEventListener('click',verMas() )


