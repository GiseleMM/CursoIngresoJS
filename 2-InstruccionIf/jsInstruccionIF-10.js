/*
Gisele Medina Div H
Ejercicio 10 
Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	let nota;
	nota= Math.floor(Math.random() * 11);
	if(nota>=9)
	{
		alert("Excelente "+nota);
	}
	else
	{
		if(nota>=4)
		{
			alert("Aprobo "+nota);
		}
		else
		{
			alert("La proxima "+nota);
		}
	}

}//FIN DE LA FUNCIÓN