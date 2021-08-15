/*Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes 
en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario 
quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 )
*/

function mostrar()
{
	var pais;
	var habitantes;
	var temperatura;
	var seguir;
	var contadorTemperaturaPares;
	var paisConMenosHabitantes;
	var menosCantidadDeHabitantes;
	var banderaPaisConMenosHabitantes;
	var acumuladorHabitantes;
	var contadorPaises;
	var promedioDeHabitantesEntreLosPaisesIngresados;
	var contadorPaisesConMasDe40Grados;
	var porcentajeConMasde40Grados;

	seguir="si";
	banderaPaisConMenosHabitantes="si";
	contadorTemperaturaPares=0;
	acumuladorHabitantes=0;
	contadorPaises=0;
	contadorPaisesConMasDe40Grados=0;


	while(seguir=="si")
	{
		pais= prompt("Ingrese pais");
		habitantes= prompt("ingrese cantidad de habitates en millones");
		habitantes= parseInt(habitantes);
		while(isNaN(habitantes) || habitantes<1 || habitantes>7000)
		{
			habitantes= prompt("ingrese cantidad de habitates en millones");
			habitantes=parseInt(habitantes);
		}
		temperatura= prompt("ingrese temperatura minima entre -50 y 50");
		temperatura=parseInt(temperatura);
		while(isNaN(temperatura)|| temperatura<-50 || temperatura>50)
		{
		temperatura= prompt("ingrese temperatura minima entre -50 y 50");
		temperatura=parseInt(temperatura);			
		}

//CANTIDAD TEMPERATURAS PARES
		if(temperatura%2==0)
		{
			contadorTemperaturaPares++;
		}
//CANTIDAD PAISES CON MAS 40°
		if(temperatura>40)
		{
			contadorPaisesConMasDe40Grados++;
		}
//MENOS HABITANTES
		if(habitantes<menosCantidadDeHabitantes || banderaPaisConMenosHabitantes=="si")
		{
			menosCantidadDeHabitantes=habitantes;
			paisConMenosHabitantes=pais;
			banderaPaisConMenosHabitantes="no";

		}
// ACUMULADOR DE HABILANTES
		acumuladorHabitantes+=habitantes;		
// CONTADOR DE PAISES INGRESADIS
		contadorPaises++;


		seguir= prompt("Desea seguir?si/no");
	}//			FIN DEL WHILE
	
//PORCENTAJE DE LOS PAISES CON TEM MAS DE 40
porcentajeConMasde40Grados=(contadorPaisesConMasDe40Grados/contadorPaises)*100;

//PROMEDIO DE HABITANTES
	promedioDeHabitantesEntreLosPaisesIngresados= acumuladorHabitantes/contadorPaises;
	document.write("El promedioDeHabitantesEntreLosPaisesIngresados es "+promedioDeHabitantesEntreLosPaisesIngresados+"<br>");
	document.write("La cantidad de temp pares es "+contadorTemperaturaPares+"<br>");
	document.write("la cantidad de paises que superan los 40 grados"+contadorPaisesConMasDe40Grados+"<br>");
	document.write("el porcentaje de paises con mas de 40 es"+porcentajeConMasde40Grados+"<br>");
	document.write("el pais con menos habitantes es"+ paisConMenosHabitantes+"<br>");
}//FIN DE LA FUNCTION
