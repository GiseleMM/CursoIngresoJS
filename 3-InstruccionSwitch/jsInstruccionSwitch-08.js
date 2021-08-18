/*Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado=txtIdDestino.value;
	alert(destinoIngresado);
	switch(destinoIngresado)
	{
		case "Bariloche":
		case "Ushuaia":
		alert("Hace Frio");
		break;
		case "Cataratas":
		case "Mar del plata":
		alert("hace caloR");
		break;

	}

}//FIN DE LA FUNCIÓN