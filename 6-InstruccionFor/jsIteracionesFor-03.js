/*Pedir la cantidad
Enunciado:
al presionar el botón pedir la cantidad de veces
 que quiero repetir el mensaje "Hola UTN FRA"
*/
function mostrar()
{

	var mensaje;
	var repeticiones;
	var i;
	repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones= parseInt(repeticiones);
	i=0;
	mensaje="Hola UTN FRA";
	/*for( mensaje=0; mensaje!=repeticiones; mensaje++)//mensaje==repeticiones No funciona porque es mensaje inicia a 0 y lo comparo repeticiones
	{
		document.write(mensaje+"<br>");
	}
	alert("ok");ESTO sobrescribe el mensaje en 0 y le suma uno y muestra o 1 2 y no el mensaje*/
	for(i=0; i<repeticiones; i++)
	{
		document.write(mensaje+"<br>");
	}


}//FIN DE LA FUNCIÓN