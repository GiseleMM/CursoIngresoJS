/*Gisele Medina DiV H
Ejercicio 6 IF */
function mostrar()
{
	let edad;
	edad=txtIdEdad.value;
	edad= parseInt(edad);
	if(edad>17)
	{
		alert("Ud es mayor de edad");
	}
	else
	{
		if(edad>12)
		{
			alert("ud es adolecente");
		}
	    else
	    {
	    	alert("ud es niño");
	    }	
	}



}//FIN DE LA FUNCIÓN