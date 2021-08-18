/*Enunciado:
una agencia de viajes nos piden informar si hacemos
 viajes a lugares según la estación del año estemos, 
 informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas 
destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche*/

function mostrar()
{
	var estacionIngresada;
	estacionIngresada=txtIdEstacion.value;
	var destinoIngresado;
	destinoIngresado= txtIdDestino.value;
	alert(estacionIngresada); 
	alert(destinoIngresado);

	switch(estacionIngresada)
	{
		default:
		alert("SE VIAJA");
		break;
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
				alert("SE VIAJA");
				break;
				default:
				alert("NO SE VIAJA");
				break;
			}
		break;
		case "Primavera":
		switch(destinoIngresado)
		{
			case "Bariloche":
			alert("NO SE VIAJA");
			break;
			default:
			alert("SE VIAJA");
			break;
		}

		break;
		case "Verano":
		switch(destinoIngresado)
		{
			case "Mar del plata":
			case "Cataratas":
			alert("SE VIAJA");
			break;
			default:
			alert("NO SE VIAJA");
			break;

		}
		
	}

}//FIN DE LA FUNCIÓN