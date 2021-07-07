/*Medina Gisele div H
ejercicio 7
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	let numero1;
	let numero2;
	let resultado;
	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);
	resultado=numero1+numero2;

	alert("La suma es: "+resultado);	
}

function restar()
{
	let numero1;
	let numero2;
	let resultado;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);
	resultado=numero1 -numero2; //espacio -num2

	alert("la resta es: "+ resultado);
	
}

function multiplicar()
{ 	let numero1;
	let numero2;
	let resultado;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);
	resultado=numero1 * numero2;
	alert( "el producto es: "+resultado);
	
}

function dividir()
{
	let numero1;
	let numero2;
	let resultado;

	numero1=txtIdNumeroUno.value;
	numero1=parseInt(numero1);
	numero2=txtIdNumeroDos.value;
	numero2=parseInt(numero2);
	resultado=numero1 / numero2;

	alert("El cociente es: "+resultado);
	
}

