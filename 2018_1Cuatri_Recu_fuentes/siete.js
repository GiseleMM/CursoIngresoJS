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
	var genero;
	var acumuladorNotas;
	var promedioDeNotas;
	var notaMinima;
	var generoNotaMinima;
	var contadorVaronAprobado;
	var porcentajeVaronAprobado;
	contadorVaronAprobado=0;
	acumuladorNotas=0;
	alumno=0;
	while(alumno<5)
	{
		nota= prompt("ingrese nota entre 0 y 10 ");
		nota= parseFloat(nota);
		while(isNaN(nota)|| nota<0 || nota >10)
		{
			nota= prompt("ingrese nota entre 0 y 10 ");
			nota= parseFloat(nota);			
		}
		genero= prompt("ingrese genero f o m");
		while(genero!="f" && genero!="m")
		{
			genero= prompt("ingrese genero f o m");
		}

//ACUMULADOR DE NOTAS
		acumuladorNotas+=nota;
		if( nota<notaMinima || alumno==0)
		{
			notaMinima=nota;
			generoNotaMinima=genero;
		}
		if(genero=="m" && nota>=6)//>5
		{
			contadorVaronAprobado++;
		}



		alumno++;
	}//FIN  DE WHILE
	porcentajeVaronAprobado=(contadorVaronAprobado/alumno)*100// (5 alumnos sobre/ 10 alumno en Total)*100= 0.5*100=50% de un total de 10 alumnos
	promedioDeNotas=acumuladorNotas/alumno;

	alert(" EL PROMEDIO DE NOTAS ES "+promedioDeNotas);
	alert("la Nota minima fue "+notaMinima+ " y el sexo fue "+generoNotaMinima);//PUSE GENERO Y NO GENERO NOTA MINIMA, me daba siempre el ultimo genero
	alert("la cantidad de varones con nota mayor o igual a 6 es"+contadorVaronAprobado);
	alert("El porcentaje de varones aprobados es"+porcentajeVaronAprobado);
}
