/*
Gisele Medina Div H
ejer 08 if
Al ingresar una edad menor a 18 años y un estado
 civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, 
mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	let edad;
	let estado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=estadoCivil.value;
	if(estado=="Soltero" && edad>17) 
	{
		alert("usted es soltero y no es menor");
	}


}//FIN DE LA FUNCIÓN