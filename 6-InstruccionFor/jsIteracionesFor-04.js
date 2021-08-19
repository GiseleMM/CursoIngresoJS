/*Enunciado:
al presionar el botón repetir hasta que utilizamos 'BREAK'.*/
function mostrar()
{
	var seguir;
	var mensaje="repetir";
	for(;;)
	{
		alert(mensaje);
		seguir=confirm("desea seguir?");
		if(seguir==false)
		{
			break;
		}
	}

}//FIN DE LA FUNCIÓN