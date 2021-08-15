/*Gisele Medina Div H 
Ejercicio 3 parcial 2018*/
function mostrar()
{
	let precio;
	let porcentaje;
	let precioFinal;


	precio=prompt("Ingrese precio: ");
	precio=parseFloat(precio);
	porcentaje=prompt("Ingrese porcentaje de descuento: ");
	porcentaje=parseFloat(porcentaje);

	precioFinal=precio-(precio*porcentaje/100);

	elPrecioFinal.value=precioFinal;




}
