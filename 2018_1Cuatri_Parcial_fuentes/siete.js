/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas
 (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, 
 informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
function mostrar()
{
	var alumno;
	var nota;
	var promedioNotas;
	var notaMinima;
	var generoNotaMinima;
	var contadorVaronesAprobados;
	var acumuladorNotas;
	acumuladorNotas=0;
	contadorVaronesAprobados=0;
	alumno=0;
	while(alumno<5)
	{
		nota= prompt("ingrese nota entre 0 y 10");
		nota= parseFloat(nota);
		while(isNaN(nota)|| nota<0 || nota>10)
		{
			nota= prompt("ingrese nota entre 0 y 10");
			nota= parseFloat(nota);
		}
		genero= prompt("ingrese genero f o m");
		while(genero!="f" && genero!="m")
		{
			genero= prompt("ingrese genero f o m");
		}
		
		switch(genero)//PUSE el MISMO ACUMULADOR EN AMBOS SWICH de M y F xq quiero notas general
		{
			case "m":
			{	acumuladorNotas+=nota;
				if(nota>5)
				{
					contadorVaronesAprobados++;

				}
			}
			case "f":
			{
				acumuladorNotas+=nota;
			}
		}
		if(nota<notaMinima || alumno==0)
		{
			notaMinima=nota;
			generoNotaMinima=genero;
		}

		alumno++;
	}//FIN DEL WHILE

promedioNotas= acumuladorNotas/alumno;
alert("el promedio de notas es"+promedioNotas);
alert("la cantidad de varones aprobados es "+contadorVaronesAprobados);
alert("la menor nota es "+notaMinima);
alert("el sexo de la nota minima es "+generoNotaMinima);

}
