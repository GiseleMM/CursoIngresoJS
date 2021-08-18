/*Gisele Medina Div H
Ejercicio 7 IF 
Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto
 a "Soltero", mostrar el
 siguiente mensaje: 'Es muy pequeño para NO ser soltero.'
*/
function mostrar()
{
	let edad;
	let estado;

	edad=txtIdEdad.value;
	edad=parseInt(edad);
	estado=estadoCivil.value;
	if(estado!="Soltero" && edad<18) 
	{
		alert("usted es muy pequeño para No ser soltero");
	}



}//FIN DE LA FUNCIÓN