/*Enunciado:
al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno.*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
		alert("abrigate q hace frio");
		break;
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("ya pasamos el frio ahora calor");
		break;
		default:
		alert(" falta para el invierno");
		/*case "Enero": ¡¡¡REMPLAZAR EL CASO con mas repetido por DEFAULT!!!
		case "Febreo":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("falta para el invierno");*/
		break;

	}






}//FIN DE LA FUNCIÓN