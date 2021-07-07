/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento25;
	let resultado;

	importe=txtIdImporte.value;
	importe=parseInt(importe);
	descuento25=importe * 0.25;
	resultado=importe - descuento25;

	txtIdResultado.value=resultado;


}
