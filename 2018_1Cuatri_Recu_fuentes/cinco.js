/*Enunciado:
Bienvenidos.
(SWITCH)pedir el ingreso de un día de la semana,
si es fin de semana mostrar " buen finde",
si es día hábil “ a trabajar”,
si no es un día valido, también informarlo,
usar una sola ventana alert.*/
function mostrar()
{
	var dia;
	var mensaje;
	mensaje="";
	dia= prompt("ingrse dia de la semana");

	switch(dia)
	{
		case "domingo":
		case "sabado":
		mensaje="buen finde";
		break;
		case "lunes":
		case "martes":
		case "miercoles":
		case "jueves":
		case "viernes":
		mensaje="a trabajar";
		break;
		default:
		mensaje="no es un dia valido";
		break;
	///alert(mensaje);ACA NO FUNCIONA  SI NO ESTA ASIGNADDO A NINGUN CASO
	}

	alert(mensaje);

}

