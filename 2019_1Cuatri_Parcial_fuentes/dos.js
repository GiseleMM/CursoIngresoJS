/*Gisele Medina div H
Ejercicio 2 parcial 2019 */

function mostrar()
{
	let nombre1;
	let nombre2;
	let peso1;
	let peso2;
	let sumados;
	let promedio;

	nombre1=prompt("Ingresa tu nombre: ");
	nombre2=prompt("Ingresa nombre de tu pareja: ");
	peso1=prompt("Ingresa tu peso: ");
	peso1=parseInt(peso1);
	peso2=prompt("Ingresa peso de tu pareja: ");
	peso2=parseInt(peso2);
	sumados=peso1+peso2;
	promedios=sumados/2;

	alert("Ustedes se llaman "+nombre1+ " y " + nombre2 + " pesan " + peso1 + " y " + peso2 + " que sumados son "+sumados + " kilos " + " y el promedio de peso es " + promedios);

  
}
 