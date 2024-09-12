//Ejercicio 2
let a = 5
let b = 10
let c = a+b
console.log("la suma de a y b es: ",c)
//Ejercio 3
let nombre = prompt("Ingresa tu nombre:");
console.log("Hola, " + nombre + "!");

//OPERADORES LOGICAS Y CONDICIONALES
//ejercicio 1
if (a > b) {
    if(a > c){
        console.log("eL mayor de los 3 números es a: ",a)
    }else{
        console.log("eL mayor de los 3 números es c: ",c)
    }
} else {
    if(b > c){
        console.log("eL mayor de los 3 números es b: ",b)
    }else{
        console.log("eL mayor de los 3 números es c: ",c)
    }
}
//ejercicio 2
let numero = prompt("Ingresa un número y te dire si es par o impar");
if(numero% 2 === 0){
    console.log("El número ", numero," es par");
}else{
    console.log("El número ", numero," es impar");
}

//OERADORES DE ASIGNACION Y BUCLES
//Ejercicio 1  WHILE
let disminuirNumero = 10
while(disminuirNumero>0) {
    console.log(disminuirNumero)
    disminuirNumero--
}
//Ejercicio 2  DO-WHILE
let numeroMayor
do {
    numeroMayor = prompt("Ingresa un número mayor a 100:")
} while (numeroMayor <= 100 && numeroMayor!==null);
console.log("Ingresaste un número mayor a 100: ",numeroMayor)

//FUNCIONES DE JAVASCRIPT
//Ejercicio 1
function esPar(numero) {
    return (numero % 2 === 0);
}
let numeroParImpar = prompt("Ingresa un número:")
console.log("El número ", numeroParImpar," es par: ", esPar(numeroParImpar))
//Ejercicio 2
function convertirCelsiusFahrenheit(celsius){
    let fahrenheit = celsius*1.8+32
    return fahrenheit
}
let gradosCelsius = prompt("Ingresa un valor en grados Celsius:")
console.log(gradosCelsius,"°C son equivalentes a ", convertirCelsiusFahrenheit(gradosCelsius),"°F")

//OBJETOS EN JAVASCRIPT
//Ejercicio 1
let persona = {
    nombre: "Ornela",
    edad: 19,
    ciudad: "Mendoza",
    
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
};
console.log("-----Objeto original");
console.log("Nombre:" + persona.nombre, ", Edad:",persona.edad,", Ciudad:",persona.ciudad);
persona.cambiarCiudad("Buenos Aires");   //metodo
console.log("-----Objeto despues de la función ");
console.log("Nombre:" + persona.nombre, ", Edad:",persona.edad,", Ciudad:",persona.ciudad);
//Ejercicio 2
let libro = {
    titulo: "Si nos enseñan aperder, ganariamos siempre",
    autor: "Albert Espinosa",
    anio: 2021,

    esAntiguo: function() {
        let anioActual = new Date().getFullYear();
        return((anioActual - this.anio) > 10)
    }
}
console.log("El libro ",libro.titulo, " es antiguo: ",libro.esAntiguo())

//ARRAYS
//Ejercicio 1
let numeros = [1,2,3,4,5,6,7,8,9,10];
let multiplicados = [];
for(let i = 0; i < numeros.length; i++){
    multiplicados.push(numeros[i]*2);
}
console.log("Números originales: ", numeros);
console.log("Números multiplicados por 2: ", multiplicados);
//Ejercicio 2
let pares = [];
for(let i = 0; i<=20; i ++) {
    if(i%2 === 0 && i!= 0){
        pares.push(i);
    }

    if(pares.length === 10) {
        break;
    }
}
console.log("Primeros 10 números pares", pares);

//Introduccion a DOM
//Ejercicio 1
const parrafos = document.querySelectorAll(".parrafo");
function cambiarColorAzul() {
    parrafos.forEach(function(parrafo) {
        parrafo.style.color = "blue";
    });
}
document.getElementById("cambiarColor").addEventListener("click", cambiarColorAzul);
//Ejercicio 2
function mostrarAlerta() {
    var valor = document.getElementById("campoTexto").value;
    alert("El valor ingresado es: " + valor);
}

//EVENTOS EN DOM
//Ejercicio 1
const elementosLista = document.getElementsByClassName('elementosLista');
Array.from(elementosLista).forEach(elemento => {
    elemento.addEventListener('click', function() {
        console.log(this.textContent);
    });
});
//Ejercicio 2
function deshabilitarCampo() {
    document.getElementById("campoTextohabilitar").disabled = true;
}
function habilitarCampo() {
    document.getElementById("campoTextohabilitar").disabled = false;
}
const botonHabilitar = document.getElementById("habilitado");
botonHabilitar.addEventListener('click', habilitarCampo);
const botonDeshabilitar = document.getElementById("deshabilitado");
botonDeshabilitar.addEventListener('click', deshabilitarCampo);

//LOCAL STORAGE
const emailInput = document.getElementById('campoEmail');
const guardarButton = document.getElementById('guardar');
const eliminarButton = document.getElementById('eliminar');
const correoAlmacenado = document.getElementById('correoAlmacenado');
function mostrarCorreoAlmacenado() {
    const email = localStorage.getItem('email');
    if(email) {
        correoAlmacenado.textContent= ('Correo almacenado ', email);
    } else {
        correoAlmacenado.textContent = '';
    }
}
guardarButton.addEventListener('click', function() {
    const email = emailInput.value;
    localStorage.setItem('email', email); //indicamos cual es el elemento a mostrar
    mostrarCorreoAlmacenado();
    emailInput.value = ''; //limpir el input del correo
});
eliminarButton.addEventListener('click', function() {
    //Eliminamos el elemento de loocalStorage
    localStorage.removeItem('email');
    mostrarCorreoAlmacenado(); //mostramos el espacio vacio
});
window.addEventListener('load', mostrarCorreoAlmacenado); //para que se siga mostrando mientras la paginase carga


git remote add origin https://github.com/OrnelaCondori/TP_javascript_programacionIII.git
git branch -M main
git push -u origin main