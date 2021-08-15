/*Medina Gisele Div H
Enunciado:
Bienvenidos.
Pedir por prompt el precio
 y el porcentaje de descuento, mostrar el precio final con descuento por id.

Ejercicio 3 2019 */
function mostrar()
{
	let precio;
	let descuentoPorcentaje;
	let descuentoCalculado;
	let precioFinal;


	precio=prompt("Ingrese precio: ");
	precio=parseFloat(precio);
	descuentoPorcentaje=prompt("Ingrese porcentaje de descuento: ");
	descuentoPorcentaje=parseFloat(descuentoPorcentaje);
	descuentoCalculado=precio * (descuentoPorcentaje/100);
	precioFinal= precio-descuentoCalculado;

	elPrecioFinal.value=precioFinal;


}


// id campo de texto: elPrecioFinal