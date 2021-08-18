/*Enunciado:
Al selecionar un destino , indicar el punto
 cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/
function mostrar()
{
	var destinoIngresado;
	destinoIngresado= txtIdDestino.value;
	alert(destinoIngresado);
	switch(destinoIngresado)
	{
		case "Bariloche":
		alert("Oeste");
		break;
		case "Ushuaia":
		alert("Sur");
		break;
		case "Cataratas":
		alert("norte");
		break;
		case "Mar del plata":
		alert("este");
		break;
	}

}//FIN DE LA FUNCIÓN