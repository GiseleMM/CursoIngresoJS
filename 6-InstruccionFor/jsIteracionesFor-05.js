/*Enunciado:
al presionar el botón repetir el pedido de número hasta que ingresemos el 9.*/
function mostrar()
{
	var seguir;
	var numero;
	for(;;)
	{
		numero=prompt("ingrese numero");
		numero=parseInt(numero);
		if(numero==9)
		{
			break;
		}
	}
	alert("ok");



}//FIN DE LA FUNCIÓN