/*Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula 
(Mercurio y Venus están antes que la tierra).*/
function mostrar()
{
	var planeta;
	var seguir;
	seguir=true;
	while(seguir==true)
	{
		planeta= prompt("ingrese planeta");
		switch(planeta)
		{
			case "tierra":
			mensaje="acá vivimos";
			break;
			case "mercurio":
			case "venus":
			mensaje="acá hace calor";
			break;
			case "marte":
			case "jupiter":
			case "saturno":
			case "urano":
			case "nepturo":
			mensaje="acá hace frio";
			break;
			default:
			mensaje="no es un planeta valido";
			break;
		}
		alert(mensaje);//LO COLOCO ACA A SI MUESTRA EN CADA ITERACION EL MENSAJE DE ACUERDO AL PLANETA
		seguir= confirm("desea seguir?");
	}//FIN DEL WHILE

}