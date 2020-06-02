// JavaScript Document

//Exercici 1 - "Hola mundo" activado por consola

console.log("Aloha mundo!");

//Exercici 2 - Crear alerta con tu nombre

alert("Me llamo Anahí");

//Execici 3 - Crear variables, una con tu nombre y otra con tu apellido

var nombre="Anahí";
var apellido="Reig Mendoza";
document.write("<p>");
document.write(nombre + " " + apellido);
document.write("</p>");

//Exercici 4 - Crear variables con dos números y hacer una suma entre ellos

var x=34;
var y=56;
total=x+y;

document.write("<p>");
document.write("La suma entre " + x + " y " + y + " es " +  total);
document.write("</p>");

//Exercici 5 - Crear una variable nota_examen con un alert que dé el resultado y la nota

var profesor=prompt("Dime tu nombre").toLowerCase();


if(profesor == "ismael") {
	alert("Felicidades! Eres el profesor más molón de Bcn Activa");
} else {
	alert("a tí no te conocemos");
}

var nota_examen=4.6;
var alumno=prompt("Escribe el nombre de tu mejor peor alumn@");

if(alumno == "Anahí") {
	alert("Uy, a esta ya veremos si le damos el certificado!");
} else if (alumno == "anahí"){
	alert("Uy, a esta ya veremos si le damos el certificado!");
} else {
	alert("No puede ser que no lo sepas, o que lo hayas escrito mal, ya te vale!");
}

var nota_examen=4.6;

if( nota_examen == 4.6){
alert("El exámen ha sido suspendido con un " + nota_examen);
} else {
alert("El exámen ha sido aprobado ");
} 

var nota_examen=8;

if( nota_examen >= 5){
alert("El exámen ha sido aprobado con un " + nota_examen);
} else {
alert("El exámen ha sido suspendido con un " + nota_examen);
} 

//Exercici 6 - Remplazar la palabra azul por la palabra verde, y las o por las u, en el texto

const p = 'Tinc un cotxe de color blau<br>';

const color = /blau/gi;
const letter = /o/gi;

console.log(p.replace(color, 'verd'));
console.log(p.replace(letter, 'u'));

document.write(p.replace('blau', 'verd'));
document.write(p.replace(letter, 'u'));

//Exercici 7 - Listado de objetos ‘taula’, ‘cadira’, ‘ordinador’, ‘libreta’, mostrar en pantalla con un bucle cada objeto y la posición.

var oficina = ["taula", "cadira", "ordinador", "llibreta"];

oficina.forEach(function (elemento, indice, array) {
	document.write("El objeto " + elemento + " está en la posición " + indice + ".<br>");
});

//Exercici 8 - Crear una función llamada calculadora que tenga como entrada los parámetros: operador, valor1 i valor2. Estructura de la función que haga sumas, restas i multiplicaciones. Resultado por pantalla.

function calculadora(valor1,valor2) {
	var valor1 = 5;
	var valor2 = 6;
  	operador = valor1 + valor2;
  	document.write("El resultado de la suma es " + operador + "<br/>");
	operador = valor1 - valor2;
	document.write("El resultado de la resta es " + operador + "<br/>");
	operador = valor1 * valor2;
	document.write("El resultado de la multiplicación es " + operador + "<br/>");
}

var operador = calculadora();










