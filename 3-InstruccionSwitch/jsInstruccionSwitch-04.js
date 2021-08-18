/*Enunciado:
al seleccionar un mes informar.
si tiene 28 días.febrero
si tiene 30 días.Abril, junio, septiembre y noviembre
si tiene 31 días.Enero, marzo, mayo, julio, agosto, octubre y diciembre*/

function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	switch(mesDelAño)
	{
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert(" Este mes tiene 30 dias");
		break;
		case "Febrero":
		alert("28 dias");
		break;
		default:
		alert("31 dias");
		break;

	}
	
	



}//FIN DE LA FUNCIÓN